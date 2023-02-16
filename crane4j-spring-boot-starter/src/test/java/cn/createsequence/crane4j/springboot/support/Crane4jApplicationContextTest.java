package cn.createsequence.crane4j.springboot.support;

import cn.createsequence.crane4j.core.container.ConstantContainer;
import cn.createsequence.crane4j.core.executor.handler.AssembleOperationHandler;
import cn.createsequence.crane4j.core.executor.handler.DisassembleOperationHandler;
import cn.createsequence.crane4j.core.parser.BeanOperationParser;
import cn.createsequence.crane4j.core.support.Crane4jGlobalConfiguration;
import cn.createsequence.crane4j.springboot.config.Crane4jAutoConfiguration;
import cn.hutool.core.map.MapUtil;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * test for {@link Crane4jApplicationContext}
 *
 * @author huangchengxing
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {Crane4jApplicationContextTest.TestConfig.class, Crane4jAutoConfiguration.class})
public class Crane4jApplicationContextTest {

    @Autowired
    private Crane4jGlobalConfiguration context;

    @Test
    public void test() {
        Assert.assertNotNull(context.getTypeResolver());
        Assert.assertNotNull(context.getBeanOperationsParser(BeanOperationParser.class));
        Assert.assertNotNull(context.getAssembleOperationHandler(AssembleOperationHandler.class));
        Assert.assertNotNull(context.getDisassembleOperationHandler(DisassembleOperationHandler.class));
        Assert.assertNotNull(context.getContainer("test"));
        Assert.assertNotNull(context.getContainer("testBean"));
    }

    protected static class TestConfig {
        @Bean("testBean")
        public ConstantContainer<String> container() {
            return ConstantContainer.forMap("test", MapUtil.of("key", "value"));
        }
    }
}
