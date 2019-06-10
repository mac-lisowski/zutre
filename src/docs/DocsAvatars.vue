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

          <z-avatar size="xl" data="ML" /> &nbsp;
          <z-avatar size="lg" data="ML" /> &nbsp;
          <z-avatar data="ML" /> &nbsp;
          <z-avatar size="sm" data="ML" /> &nbsp;
          <z-avatar size="xs" data="ML" />

        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-avatar size="xl" data="ML" /&gt;
&lt;z-avatar size="lg" data="ML" /&gt;
&lt;z-avatar data="ML" /&gt;
&lt;z-avatar size="sm" data="ML" /&gt;
&lt;z-avatar size="xs" data="ML" /&gt;
</z-code>

      <z-divider />
      <h4>Presence indicators</h4>

      <z-columns>
        <z-column>

          <z-avatar size="xl" data="ML" presence="online" /> &nbsp;
          <z-avatar size="lg" data="ML" presence="busy" /> &nbsp;
          <z-avatar data="ML" presence="away" /> &nbsp;
          <z-avatar size="sm" data="ML" presence="offline" /> &nbsp;
          <z-avatar size="xs" data="ML" presence="offline" />

        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-avatar size="xl" data="ML" presence="online" /&gt;
&lt;z-avatar size="lg" data="ML" presence="busy" /&gt;
&lt;z-avatar data="ML" presence="away" /&gt;
&lt;z-avatar size="sm" data="ML" presence="offline" /&gt;
&lt;z-avatar size="xs" data="ML" presence="offline" /&gt;
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
&lt;z-avatar size="lg" presence="online" :src="require('./avatar.png')" /&gt;
&lt;z-avatar size="lg" :src="require('./avatar2.png')" :presenceSrc="require('./avatar.png')" /&gt;
</z-code>


      <z-divider />
      <h4>Avatar badges</h4>

      <z-columns>
        <z-column>
          <z-avatar size="lg" presence="online" data="ML" badge="1" /> &nbsp;
          <z-avatar size="lg" presence="busy" :src="require('./avatar.png')" badge="999" /> &nbsp;
        </z-column>
      </z-columns>

      <z-code lang="Vue">
&lt;z-avatar size="lg" presence="online" data="ML" badge="1" /&gt;
&lt;z-avatar size="lg" presence="busy" :src="require('./avatar.png')" badge="999" /&gt;
</z-code>

      <z-divider />
      <h4>Avatar dropdown</h4>
      <p>Avatar supports capability for dropdown menu for presence indicator.</p>

      <z-avatar size="xl" data="ML" :presence="presenceStatus" @click="avatarClick" :menu="[
        { name: 'online', onClick: () => change('online')},
        { name: 'away', onClick: () => change('away')},
        { name: 'busy', onClick: () => change('busy')},
        { name: 'invisible', onClick: () => change('invisible')},
      ]" />
      <br>

      <z-code lang="Vue">
&lt;z-avatar size="xl" data="ML" :presence="status" @click="avatarClick" :menu="[
  { name: 'online', onClick: () => change('online')},
  { name: 'away', onClick: () => change('away')},
  { name: 'busy', onClick: () => change('busy')},
  { name: 'invisible', onClick: () => change('invisible')},
]" /&gt;
      </z-code>


      <z-divider content="API" />
      <h4>API</h4>

      <h5>Avatar <code>&lt;z-avatar /&gt;</code></h5>
      <z-table scrollable shrink>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>data</code></z-td>
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

          <z-tr>
            <z-td><code>menu</code></z-td>
            <z-td>
              dropdown menu items, can have properties as defined in <z-link :link="{ name: 'docsMenu' }" name="Menu Item" />
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td colspan="5"><strong>EVENTS</strong></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>click</code></z-td>
            <z-td>
              emmited when avatar is clicked
            </z-td>
            <z-td><code>Event</code></z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsAvatars',
  data() {
    return {
      presenceStatus: 'online',
    };
  },
  methods: {
    avatarClick() {
      alert('avatar click');
    },
    change(val) {
      this.presenceStatus = val;
    }
  },
}
</script>
