<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Avatars', link: { name: 'docsAvatars' }}]" />
      <h4>Avatars</h4>

      <p>
        Avatars support presence indicators. You can add an <code>presence</code> property and 
        set <code>online</code>, <code>busy</code> or <code>away</code> for different status colors
      </p>

      <p>
        Components:<br>
        <code>&lt;z-avatar&gt;</code>
      </p>

      <z-divider />
      <h4>Sizes</h4>

      <z-columns>
        <z-column>
          
          <z-avatar size="xl" dataInitial="ML" /> &nbsp;
          <z-avatar size="lg" dataInitial="ML" /> &nbsp;
          <z-avatar dataInitial="ML" /> &nbsp;
          <z-avatar size="sm" dataInitial="ML" /> &nbsp;
          <z-avatar size="xs" dataInitial="ML" />

        </z-column>
      </z-columns>

<z-code lang="Vue">
import { ZAvatar } from 'zutre'

&lt;z-avatar size="xl" dataInitial="ML" /&gt;
&lt;z-avatar size="lg" dataInitial="ML" /&gt;
&lt;z-avatar dataInitial="ML" /&gt;
&lt;z-avatar size="sm" dataInitial="ML" /&gt;
&lt;z-avatar size="xs" dataInitial="ML" /&gt;
</z-code>
      
      <z-divider />
      <h4>Presence indicators</h4>

      <z-columns>
        <z-column>
          
          <z-avatar size="xl" dataInitial="ML" presence="online" /> &nbsp;
          <z-avatar size="lg" dataInitial="ML" presence="busy" /> &nbsp;
          <z-avatar dataInitial="ML" presence="away" /> &nbsp;
          <z-avatar size="sm" dataInitial="ML" presence="offline" /> &nbsp;
          <z-avatar size="xs" dataInitial="ML" presence="offline" />

        </z-column>
      </z-columns>

<z-code lang="Vue">
import { ZAvatar } from 'zutre'

&lt;z-avatar size="xl" dataInitial="ML" presence="online" /&gt;
&lt;z-avatar size="lg" dataInitial="ML" presence="busy" /&gt;
&lt;z-avatar dataInitial="ML" presence="away" /&gt;
&lt;z-avatar size="sm" dataInitial="ML" presence="offline" /&gt;
&lt;z-avatar size="xs" dataInitial="ML" presence="offline" /&gt;
</z-code>

      <z-divider />
      <h4>Avatar images / Presence images</h4>

      <z-columns>
        <z-column>
          <z-avatar size="lg" presence="online" :src="require('./avatar2.png')" /> &nbsp;
          <z-avatar size="lg" presence="busy" :src="require('./avatar.png')" /> &nbsp;
          <z-avatar size="lg" presence="away" :src="require('./avatar2.png')" /> &nbsp;
          <z-avatar size="lg" presence="offline" :src="require('./avatar.png')" />
        </z-column>
        <z-column>
          <z-avatar size="lg" :src="require('./avatar2.png')" :presenceSrc="require('./avatar.png')" /> &nbsp;
          <z-avatar size="lg" :src="require('./avatar.png')" :presenceSrc="require('./avatar2.png')" /> &nbsp;
          <z-avatar size="lg" :src="require('./avatar2.png')" :presenceSrc="require('./avatar.png')" /> &nbsp;
          <z-avatar size="lg" :src="require('./avatar.png')" :presenceSrc="require('./avatar2.png')" />
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZAvatar } from 'zutre'

&lt;z-avatar size="lg" presence="online" :src="require('./avatar.png')" /&gt;
&lt;z-avatar size="lg" :src="require('./avatar2.png')" :presenceSrc="require('./avatar.png')" /&gt;
</z-code>


      <z-divider />
      <h4>Avatar badges</h4>

      <z-columns>
        <z-column>
          <z-avatar size="lg" presence="online" dataInitial="ML" badge="1" /> &nbsp;
          <z-avatar size="lg" presence="busy" :src="require('./avatar.png')" badge="999" /> &nbsp;
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZAvatar } from 'zutre'

&lt;z-avatar size="lg" presence="online" dataInitial="ML" badge="1" /&gt;
&lt;z-avatar size="lg" presence="busy" :src="require('./avatar.png')" badge="999" /&gt;
</z-code>


      <z-divider content="API" />
      <h4>API</h4>

      <h5>Avatar <code>&lt;z-avatar /&gt;</code></h5>
      <z-table>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>dataInitial</code></z-td>
            <z-td>
              initial data (eg. when you are not using icon)
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>src</code></z-td>
            <z-td>
              path to avatar image
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>size</code></z-td>
            <z-td>
              size of avatar
            </z-td>
            <z-td>String</z-td>
            <z-td><code>xl</code>, <code>lg</code>, <code>sm</code>, <code>xs</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>presence</code></z-td>
            <z-td>
              Avatars support presence indicators, set value for different status colors
            </z-td>
            <z-td>String</z-td>
            <z-td><code>online</code>, <code>busy</code>, <code>away</code>, <code>offline</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>presenceSrc</code></z-td>
            <z-td>
              path to presence indicator image
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>badge</code></z-td>
            <z-td>
              avatar badge content
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
// import avatar2 from './avatar2.png'

import { 
  ZContainer, ZBreadcrumbs, ZColumns, ZColumn, ZCode, ZDivider, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd,
  ZAvatar
  } from './../components'

export default {
  name: 'DocsAvatars',
  // data: {
    // avatar2: avatar2
  // },
  components: {
    ZContainer, ZBreadcrumbs, ZColumns, ZColumn, ZCode, ZDivider, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd,
    ZAvatar
  },
  methods: {
    
  }
}
</script>
