package cn.crane4j.core.util;

import cn.crane4j.core.container.Container;
import cn.crane4j.core.container.ContainerProvider;
import cn.crane4j.core.executor.BeanOperationExecutor;
import cn.crane4j.core.executor.handler.AssembleOperationHandler;
import cn.crane4j.core.executor.handler.DisassembleOperationHandler;
import cn.crane4j.core.parser.BeanOperationParser;
import cn.crane4j.core.support.Crane4jGlobalConfiguration;
import cn.crane4j.core.support.callback.ContainerRegisterAware;
import cn.hutool.core.text.CharSequenceUtil;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.Objects;
import java.util.function.BiFunction;
import java.util.function.Consumer;

/**
 * ConfigurationUtil
 *
 * @author huangchengxing
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ConfigurationUtil {

    @SuppressWarnings("unchecked")
    public static <K, C extends Container<K>> C invokeRegisterAware(
        Object operator, C container, Collection<ContainerRegisterAware> awares, Consumer<C> consumer) {
        // before
        for (ContainerRegisterAware aware : awares) {
            if (Objects.isNull(container)) {
                break;
            }
            container = (C)aware.beforeContainerRegister(operator, container);
        }
        consumer.accept(container);
        // after
        if (Objects.nonNull(container)) {
            for (ContainerRegisterAware aware : awares) {
                aware.afterContainerRegister(operator, container);
            }
        }
        return container;
    }

    public static ContainerProvider getContainerProvider(
        Crane4jGlobalConfiguration configuration, String name, Class<?> type) {
        return getPlugin(
            configuration, ContainerProvider.class,
            Crane4jGlobalConfiguration::getContainerProvider, type,
            Crane4jGlobalConfiguration::getContainerProvider, name
        );
    }

    public static BeanOperationExecutor getOperationExecutor(
        Crane4jGlobalConfiguration configuration, String name, Class<?> type) {
        return getPlugin(
            configuration, BeanOperationExecutor.class,
            Crane4jGlobalConfiguration::getBeanOperationExecutor, type,
            Crane4jGlobalConfiguration::getBeanOperationExecutor, name
        );
    }

    public static DisassembleOperationHandler getDisassembleOperationHandler(
        Crane4jGlobalConfiguration configuration, String name, Class<?> type) {
        return getPlugin(
            configuration, DisassembleOperationHandler.class,
            Crane4jGlobalConfiguration::getDisassembleOperationHandler, type,
            Crane4jGlobalConfiguration::getDisassembleOperationHandler, name
        );
    }

    public static AssembleOperationHandler getAssembleOperationHandler(
        Crane4jGlobalConfiguration configuration, String name, Class<?> type) {
        return getPlugin(
            configuration, AssembleOperationHandler.class,
            Crane4jGlobalConfiguration::getAssembleOperationHandler, type,
            Crane4jGlobalConfiguration::getAssembleOperationHandler, name
        );
    }

    public static BeanOperationParser getParser(
        Crane4jGlobalConfiguration configuration, String name, Class<?> type) {
        return getPlugin(
            configuration, BeanOperationParser.class,
            Crane4jGlobalConfiguration::getBeanOperationsParser, type,
            Crane4jGlobalConfiguration::getBeanOperationsParser, name
        );
    }

    @SuppressWarnings("unchecked")
    private static <T> T getPlugin(
        Crane4jGlobalConfiguration configuration, Class<T> pluginType,
        BiFunction<Crane4jGlobalConfiguration, Class<T>, T> getByType, Class<?> type,
        BiFunction<Crane4jGlobalConfiguration, String, T> getByName, String name) {
        // find by name
        if (CharSequenceUtil.isNotEmpty(name)) {
            return pluginType.cast(getByName.apply(configuration, name));
        }
        // find by type
        Class<?> targetType = (Objects.equals(Object.class, type) || !pluginType.isAssignableFrom(type)) ? pluginType : type;
        return pluginType.cast(getByType.apply(configuration, (Class<T>)targetType));
    }
}
