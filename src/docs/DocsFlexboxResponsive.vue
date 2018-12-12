<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Layout' }, { name: 'Responsive', link: { name: 'docsFlexboxResponsive' }}]" />
      <h4>Responsive</h4>

      <p>Layout includes flexbox based responsive grid system with 12 columns and a neat responsive layout grid system and responsive visibility utilities.</p>

      <p>More detaied info about responsive grid and viewports please read at Spectre documentation <a href="https://picturepan2.github.io/spectre/layout/responsive.html" target="_blank">here</a>.</p>
      <p>
        Components:
        <code>&lt;z-container&gt;</code>,<code>&lt;z-columns&gt;</code>,<code>&lt;z-column&gt;</code>
      </p>

      <z-divider content="SHRINK WINDOW ON DESKTOP" />

      <z-columns>
        <z-column :sizeXL="12" :size="4">
          <div class="bg-primary text-secondary docs-block">col-4 col-xl-12</div>
        </z-column>
        <z-column :sizeXL="12" :size="4">
          <div class="bg-primary text-secondary docs-block">col-4 col-xl-12</div>
        </z-column>
        <z-column :sizeXL="12" :size="4">
          <div class="bg-primary text-secondary docs-block">col-4 col-xl-12</div>
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZContainer, ZColumns, ZColumn } from 'zutre'

&lt;z-container&gt;
  &lt;z-columns&gt;
    &lt;z-column :sizeXL="12" :size="4"&gt;col-4 col-xl-12&lt;/z-column&gt;
    &lt;z-column :sizeXL="12" :size="4"&gt;col-4 col-xl-12&lt;/z-column&gt;
    &lt;z-column :sizeXL="12" :size="4"&gt;col-4 col-xl-12&lt;/z-column&gt;
  &lt;/z-columns&gt;
&lt;/z-container&gt;
      </z-code>


      <z-divider content="API" />
      <h4>API</h4>

      <h5>Columns <code>&lt;z-columns /&gt;</code></h5>
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
            <z-td><code>gapless</code></z-td>
            <z-td>
              set <code>true</code> to have gapless columns
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>oneline</code></z-td>
            <z-td>
              set <code>true</code> to have make all child columns positioned in the same single row
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>size</code></z-td>
            <z-td>
              set for a fixed-width container with the specific max-width
            </z-td>
            <z-td>String</z-td>
            <z-td><code>xs</code>, <code>sm</code>, <code>lg</code>, <code>xl</code></z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>
      <br>
      <h5>Column <code>&lt;z-column /&gt;</code></h5>
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
            <z-td><code>size</code></z-td>
            <z-td>
              column size
            </z-td>
            <z-td>Number</z-td>
            <z-td><code>1</code> to <code>12</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>sizeXS</code></z-td>
            <z-td>
              column size for xs viewport <code>col-xs-</code>
            </z-td>
            <z-td>Number</z-td>
            <z-td><code>1</code> to <code>12</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>sizeSM</code></z-td>
            <z-td>
              column size for sm viewport <code>col-sm-</code>
            </z-td>
            <z-td>Number</z-td>
            <z-td><code>1</code> to <code>12</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>sizeLG</code></z-td>
            <z-td>
              column size for lg viewport <code>col-lg-</code>
            </z-td>
            <z-td>Number</z-td>
            <z-td><code>1</code> to <code>12</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>sizeXL</code></z-td>
            <z-td>
              column size for xl viewport <code>col-xl-</code>
            </z-td>
            <z-td>Number</z-td>
            <z-td><code>1</code> to <code>12</code></z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>mxAuto</code></z-td>
            <z-td>set margins between columns without using empty columns
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>mlAuto</code></z-td>
            <z-td>set margins between columns without using empty columns
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>mrAuto</code></z-td>
            <z-td>set margins between columns without using empty columns
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>hideXS</code></z-td>
            <z-td>hide in xs viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>hideSM</code></z-td>
            <z-td>hide in sm viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>hideLG</code></z-td>
            <z-td>hide in lg viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>hideXL</code></z-td>
            <z-td>hide in xl viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

          <z-tr>
            <z-td><code>showXS</code></z-td>
            <z-td>show in xs viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>showSM</code></z-td>
            <z-td>show in sm viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>showLG</code></z-td>
            <z-td>show in lg viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>showXL</code></z-td>
            <z-td>show in xl viewport
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code> / <code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>

        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsFlexbox',
}
</script>
