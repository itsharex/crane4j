package cn.crane4j.core.executor;

import cn.crane4j.core.annotation.Assemble;
import cn.crane4j.core.annotation.Disassemble;
import cn.crane4j.core.annotation.Mapping;
import cn.crane4j.core.container.ConstantContainer;
import cn.crane4j.core.container.Container;
import cn.crane4j.core.parser.BeanOperations;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * test for {@link AbstractBeanOperationExecutor}
 *
 * @author huangchengxing
 */
public class AsyncBeanOperationExecutorTest extends BaseExecutorTest {

    private ThreadPoolExecutor executor;
    private AsyncBeanOperationExecutor operationExecutor;

    @Before
    public void init() {
        executor = new ThreadPoolExecutor(
            1, 1, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<>()
        );
        operationExecutor = new AsyncBeanOperationExecutor(executor);

        Map<Integer, Object> sources = new HashMap<>();
        sources.put(1, new Source(1, "one"));
        sources.put(2, new Source(2, "two"));
        Container<Integer> container = ConstantContainer.forMap("test", sources);
        configuration.getContainerMap().put("test", container);
    }

    @SuppressWarnings("all")
    @Test
    public void execute() {
        Bean bean1 = new Bean().setId(1).setNestedBean(new NestedBean().setType(2));
        Bean bean2 = new Bean().setId(2).setNestedBean(new NestedBean().setType(1));
        List<Bean> beanList = Arrays.asList(bean1, bean2);

        BeanOperations beanOperations = parseOperations(Bean.class);
        operationExecutor.execute(beanList, beanOperations);

        // waiting for shutdown
        executor.shutdown();
        while (!executor.isShutdown()) { }

        Assert.assertEquals("one", bean1.getName());
        Assert.assertEquals("two", bean1.getNestedBean().getTypeName());
        Assert.assertEquals("two", bean2.getName());
        Assert.assertEquals("one", bean2.getNestedBean().getTypeName());
    }

    @Getter
    @RequiredArgsConstructor
    private static class Source {
        private final Integer key;
        private final String value;
    }

    @Accessors(chain = true)
    @Data
    private static class Bean {
        @Assemble(namespace = "test", props = @Mapping(ref = "name", src = "value"))
        private Integer id;
        private String name;
        @Disassemble(type = NestedBean.class)
        private NestedBean nestedBean;
    }

    @Accessors(chain = true)
    @Data
    private static class NestedBean {
        @Assemble(namespace = "test", props = @Mapping(ref = "typeName", src = "value"))
        private Integer type;
        private String typeName;
    }
}