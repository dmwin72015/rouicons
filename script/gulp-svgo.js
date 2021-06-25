import cloneDeep from 'lodash.clonedeep';
import { loadConfig, extendDefaultPlugins } from 'svgo';

export const getSvgoConfig = async function (options = null, doDeepClone = false) {
    // Construct the svgo config from the given options.
    let config = {
        ...options,
    };

    // Get the options that are for this gulp plugin and not for svgo.
    const pluginOptions = {
        full: Boolean(config.full),
        configFile: config.configFile || null,
        cwd: config.cwd || process.cwd(),
    };
    delete config.full;
    delete config.configFile;
    delete config.cwd;

    if (pluginOptions.full) {
        return config;
    }

    const plugins = config.plugins || [];
    delete config.plugins;

    const loadedConfig = await loadConfigFromCache(pluginOptions.configFile, pluginOptions.cwd);
    if (loadedConfig) {
        config = {
            ...(doDeepClone ? cloneDeep(loadedConfig) : loadedConfig),
            ...config,
        };
    }

    if (config.plugins) {
        config.plugins = extendLoadedPlugins(config.plugins, plugins);
    } else {
        config.plugins = extendDefaultPlugins(plugins);
    }

    return config;
};

const extendLoadedPlugins = (loadedPlugins, plugins) => {
    const pluginsOrder = [];
    const extendedPlugins = loadedPlugins.map(plugin => {
        pluginsOrder.push(typeof plugin === 'string' ? plugin : plugin.name);
        return plugin;
    });

    for (const plugin of plugins) {
        const index = pluginsOrder.indexOf(typeof plugin === 'string' ? plugin : plugin.name);
        if (index === -1) {
            extendedPlugins.push(plugin);
        } else {
            extendedPlugins[index] = plugin;
        }
    }

    return extendedPlugins;
};
