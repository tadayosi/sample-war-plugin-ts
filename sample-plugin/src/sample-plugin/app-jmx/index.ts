import { HawtioPlugin, hawtio, workspace } from '@hawtio/react'
import { AppJmx } from './AppJmx'
import { jmxDomain, log, pluginName, pluginPath, pluginTitle } from './globals'

/**
 * This example demonstrates how you can create a plugin that reuses the views
 * from the builtin JMX plugin (Attributes, Operations, and Chart) into your own
 * plugin.
 */
export const appJmx: HawtioPlugin = () => {
  log.info('Loading', pluginName)

  hawtio.addPlugin({
    id: pluginName,
    title: pluginTitle,
    path: pluginPath,
    component: AppJmx,
    isActive: async () => workspace.treeContainsDomainAndProperties(jmxDomain),
  })
}
