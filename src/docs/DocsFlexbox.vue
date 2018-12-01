<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Layout' }, { name: 'Flexbox grid', link: { name: 'docsFlexbox' }}]" />
      <h4>Flexbox grid</h4>

      <p>Layout includes flexbox based responsive grid system with 12 columns.</p>

      <p>
        Components: 
        <code>&lt;z-container&gt;</code>,<code>&lt;z-columns&gt;</code>,<code>&lt;z-column&gt;</code>
      </p>

      <z-divider />

      <z-columns>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="12">
          <div class="bg-gray docs-block">col-12 (100%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="9">
          <div class="bg-gray docs-block">col-9 (75%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="6">
          <div class="bg-gray docs-block">col-6 (50%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="3">
          <div class="bg-gray docs-block">col-3 (25%)</div>
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZContainer, ZColumns, ZColumn } from 'zutre'

&lt;z-container&gt;
  &lt;z-columns&gt;
    &lt;z-column :size="12"&gt;col-12&lt;/z-column&gt;  
    &lt;z-column :size="9"&gt;col-9&lt;/z-column&gt;  
    &lt;z-column :size="6"&gt;col-6&lt;/z-column&gt;  
    &lt;z-column :size="3"&gt;col-3&lt;/z-column&gt;
  &lt;/z-columns&gt;
&lt;/z-container&gt;
      </z-code>
      
      <h4>Gapless grid</h4>

      <z-columns gapless>
        <z-column :size="6">
          <div class="bg-primary text-secondary docs-block">col-6 (gapless)</div>
        </z-column>
        <z-column :size="6">
          <div class="bg-primary text-secondary docs-block">col-6 (gapless)</div>
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZContainer, ZColumns, ZColumn } from 'zutre'

&lt;z-container gapless&gt;
  &lt;z-columns&gt;
    &lt;z-column :size="6"&gt;col-6 (gapless)&lt;/z-column&gt;  
    &lt;z-column :size="6"&gt;col-6 (gapless)&lt;/z-column&gt;  
  &lt;/z-columns&gt;
&lt;/z-container&gt;
      </z-code>

      <p>By default, <a href="https://picturepan2.github.io/spectre/layout/grid.html" target="_blank">Spectre grid</a> has multi-line flexbox enabled. You can set <code>oneline</code> property to <code>true</code> to make all its child columns positioned in the same single row.

      <z-columns oneline>
        <z-column :size="6">
          <div class="bg-primary text-secondary docs-block">col-6</div>
        </z-column>
        <z-column :size="6">
          <div class="bg-primary text-secondary docs-block">col-6</div>
        </z-column>
        <z-column :size="6">
          <div class="bg-primary text-secondary docs-block">col-6</div>
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZContainer, ZColumns, ZColumn } from 'zutre'

&lt;z-container oneline&gt;
  &lt;z-columns&gt;
    &lt;z-column :size="6"&gt;col-6&lt;/z-column&gt;
    &lt;z-column :size="6"&gt;col-6&lt;/z-column&gt;
    &lt;z-column :size="6"&gt;col-6&lt;/z-column&gt;
  &lt;/z-columns&gt;
&lt;/z-container&gt;
      </z-code>


      <h4>Grid offset</h4>

      <p>
        The Flexbox grid provides margin auto utilities to set offset. There are properties: <code>mxAuto</code>, 
        <code>mlAuto</code> and <code>mrAuto</code> to set margins between columns without using empty columns.
      </p>

      <z-columns>
        <z-column :size="2">
          <div class="bg-primary text-secondary docs-block">col-2</div>
        </z-column>
        <z-column :size="4" mxAuto>
          <div class="bg-primary text-secondary docs-block">col-4 mxAuto</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="2">
          <div class="bg-primary text-secondary docs-block">col-2</div>
        </z-column>
        <z-column :size="4" mlAuto>
          <div class="bg-primary text-secondary docs-block">col-4 mlAuto</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="4" mlAuto>
          <div class="bg-primary text-secondary docs-block">col-4 mlAuto</div>
        </z-column>
        <z-column :size="2">
          <div class="bg-primary text-secondary docs-block">col-2</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="4" mxAuto>
          <div class="bg-primary text-secondary docs-block">col-4 mxAuto</div>
        </z-column>
        <z-column :size="2">
          <div class="bg-primary text-secondary docs-block">col-2</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="4" mrAuto>
          <div class="bg-primary text-secondary docs-block">col-4 mrAuto</div>
        </z-column>
        <z-column :size="2">
          <div class="bg-primary text-secondary docs-block">col-2</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="4" mxAuto>
          <div class="bg-primary text-secondary docs-block">col-4 mxAuto</div>
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZContainer, ZColumns, ZColumn } from 'zutre'

&lt;z-container&gt;
  &lt;z-columns&gt;
    &lt;z-column :size="4" mrAuto&gt;col-4 mrAuto&lt;/z-column&gt;
    &lt;z-column :size="2"&gt;col-2&lt;/z-column&gt;
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
        </z-tbody>
      </z-table>

      <p>Layout includes flexbox based responsive grid system with 12 columns.</p>

      <z-divider />

      <z-columns>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
        <z-column :size="1">
          <div class="bg-primary text-secondary docs-block">&nbsp;</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="12">
          <div class="bg-gray docs-block">col-12 (100%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="9">
          <div class="bg-gray docs-block">col-9 (75%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="6">
          <div class="bg-gray docs-block">col-6 (50%)</div>
        </z-column>
      </z-columns>

      <z-columns>
        <z-column :size="3">
          <div class="bg-gray docs-block">col-3 (25%)</div>
        </z-column>
      </z-columns>

      <z-code lang="Vue">
import { ZContainer, ZColumns, ZColumn } from 'zutre'

&lt;z-container&gt;
  &lt;z-columns&gt;
    &lt;z-column :size="12"&gt;col-12&lt;/z-column&gt;  
    &lt;z-column :size="9"&gt;col-9&lt;/z-column&gt;  
    &lt;z-column :size="6"&gt;col-6&lt;/z-column&gt;  
    &lt;z-column :size="3"&gt;col-3&lt;/z-column&gt;
  &lt;/z-columns&gt;
&lt;/z-container&gt;
      </z-code>

    </z-container>
</template>
<script>
import { ZContainer, ZCode, ZDivider, ZBreadcrumbs, ZColumns, ZColumn, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd } from './../components'

export default {
  name: 'DocsFlexbox',
  components: {
    ZContainer, ZBreadcrumbs, ZCode, ZColumns, ZColumn, ZDivider, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd
  }
}
</script>

<style lang="scss" scoped>

</style>
