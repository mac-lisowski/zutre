<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Bars', link: { name: 'docsBars' }}]" />
      <h4>Bars</h4>

      <p>
        Components: <code>&lt;z-bar /&gt;</code><code>&lt;z-bar-item /&gt;</code>
      </p>

      <z-divider content="PROGRESS BAR" />
      <br>

      <z-bar size="sm">
        <z-bar-item :min="0" :max="35" :value="35" tooltip="35%" />
      </z-bar>
      
      <br>
      <z-bar size="sm">
        <z-bar-item :min="20" :max="65" :value="35" />
      </z-bar>
      <z-code lang="Vue">&lt;z-bar size="sm"&gt;
  &lt;z-bar-item :min="0" :max="35" :value="35" tooltip="35%" /&gt;
&lt;/z-bar&gt;

&lt;z-bar size="sm"&gt;
  &lt;z-bar-item :min="20" :max="65" :value="35" /&gt;
&lt;/z-bar&gt;
</z-code>

      <br>
      <z-bar :items='[
        {"min": 0, "max": 15, "value": 15, "tooltip": "15%", content: "15%"},
        {"min": 0, "max": 30, "value": 30, "tooltip": "30%", content: "30%"}
      ]' />
      <z-code lang="Vue">&lt;z-bar :items='[
  {"min": 0, "max": 15, "value": 15, "tooltip": "15%", content: "15%"},
  {"min": 0, "max": 30, "value": 30, "tooltip": "30%", content: "30%"}
]' /&gt;

      </z-code>
      <br>

      <z-bar>
        <z-bar-item :min="0" :max="35" :value="35" tooltip="35%" content="35%" />
        <z-bar-item :min="0" :max="20" :value="20" tooltip="20%" style="background:#818bd5;">20%</z-bar-item>
      </z-bar>
      <z-code lang="Vue">&lt;z-bar&gt;
  &lt;z-bar-item :min="0" :max="35" :value="35" tooltip="35%" content="35%" /&gt;
  &lt;z-bar-item :min="0" :max="20" :value="20" tooltip="20%" style="background:#818bd5;"&gt;20%&lt;/z-bar-item&gt;
&lt;/z-bar&gt;     
      </z-code>
      <br>
      
      <z-bar>
        <z-bar-item :min="0" :max="35" :value="65" tooltip="65%"/>
      </z-bar>
      <z-code lang="Vue">&lt;z-bar&gt;
  &lt;z-bar-item :min="0" :max="35" :value="65" tooltip="65%" /&gt;
&lt;/z-bar&gt;
      </z-code>
      <br>

      <z-divider content="SLIDER" />
      <br>

      <z-bar :slider="true">
      </z-bar>

<z-code lang="Vue">
&lt;z-bar&gt;
  code
&lt;/z-bar&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Bar <code>&lt;z-bar /&gt;</code></h5>
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
            <z-td><code>type</code></z-td>
            <z-td>
              type of a bar
            </z-td>
            <z-td><code>String</code></z-td>
            <z-td><code>progress</code>, <code>slider</code></z-td>
            <z-td><code>progress</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>size</code></z-td>
            <z-td>
              set size of a bar
            </z-td>
            <z-td><code>String</code></z-td>
            <z-td><code>sm</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>items</code></z-td>
            <z-td>
              array of JSON objects with bar items<br>
              <code lang="js">
{
  "min": 0, "max": 100, "value": 15, "tooltip": "15%", content: "15%"
}
              </code>
            </z-td>
            <z-td><code>Array[JSON]</code></z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

      <br>
      <h5>Bar Item <code>&lt;z-bar-item /&gt;</code></h5>
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
            <z-td><code>min</code></z-td>
            <z-td>
              min % value for bar item
            </z-td>
            <z-td><code>Number</code></z-td>
            <z-td>---</z-td>
            <z-td><code>0</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>max</code></z-td>
            <z-td>
              max % value for bar item
            </z-td>
            <z-td><code>Number</code></z-td>
            <z-td>---</z-td>
            <z-td><code>100</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>value</code></z-td>
            <z-td>
              current value
            </z-td>
            <z-td><code>Number</code></z-td>
            <z-td>---</z-td>
            <z-td><code>0</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>tooltip</code></z-td>
            <z-td>
              tooltip content
            </z-td>
            <z-td><code>String</code></z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>content</code></z-td>
            <z-td>
              bar item content
            </z-td>
            <z-td><code>String</code></z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsBars',
}
</script>
