<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Components' }, { name: 'Card', link: { name: 'docsCard' }}]" />
      <h4>Card</h4>
      
      <p>
        Cards are flexible content containers.
      </p>
      <p>
        Components: 
        <code>&lt;z-card&gt;</code>,<code>&lt;z-card-image&gt;</code>, <code>&lt;z-card-header&gt;</code>, <code>&lt;z-card-body&gt;</code>, <code>&lt;z-card-footer&gt;</code>, 
        <code>&lt;z-card-title&gt;</code>, <code>&lt;z-card-subtitle&gt;</code>
      </p>
      <p>
        Photo by Ishan <a href="https://unsplash.com/photos/WVziwa_DDwI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">@seefromthesky</a>
      </p>
      <z-divider />
      <br>
      <z-columns>
        <z-column>
          <z-card>
            <z-card-image src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=500&q=80" />
            <z-card-header>
              <z-card-title content="GitHub" :size="5" />
              <z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" />
            </z-card-header>
            <z-card-body>
              <p>Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.</p>
            </z-card-body>
            <z-card-footer>
              <z-button type="primary">Button</z-button>
            </z-card-footer>
          </z-card>
        </z-column>

        <z-column>
          <z-card>
            <z-card-header>
              <z-card-title content="Google" :size="5" />
              <z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" />
            </z-card-header>
            <z-card-image src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=500&q=80" />
            <z-card-body>
              <p>Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.</p>
            </z-card-body>
            <z-card-footer>
              <z-button-group block>
                <z-button>Button</z-button><z-button>Button</z-button>
              </z-button-group>
            </z-card-footer>
          </z-card>

        </z-column>
      </z-columns>

      <z-columns>
        <z-column>

          <z-card>
            <z-card-image src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=500&q=80" />
            <z-card-header>
              <z-button type="primary" right>Buy</z-button>
              <z-card-title content="Microsoft" :size="5" />
              <z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" />
            </z-card-header>
            <z-card-body>
              <p>Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.</p>
            </z-card-body>
          </z-card>

        </z-column>
        <z-column>

          <z-card>
            <z-card-image src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=500&q=80" />
            <z-card-header>
              <z-card-title content="Apple" :size="5" />
              <z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" />
            </z-card-header>
            <z-card-footer>
              <z-button-group block>
                <z-button type="primary">Button</z-button>
                <z-button type="primary">Button</z-button>
                <z-button type="primary">Button</z-button>
              </z-button-group>
            </z-card-footer>
            <z-card-body>
              <p>Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.</p>
            </z-card-body>
          </z-card>

        </z-column>
      </z-columns>

      <z-columns>
        <z-column>

          <z-card>
            <z-card-header>
              <z-card-title content="Amazon" :size="5" />
              <z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" />
            </z-card-header>
            <z-card-body>
              <p>Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.</p>
            </z-card-body>
            <z-card-image src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=500&q=80" />
          </z-card>

        </z-column>

        <z-column>

          <z-card>
            <z-card-header>
              <z-card-title content="Azure" :size="5" />
              <z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" />
            </z-card-header>
            <z-card-body>
              <p>Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.</p>
            </z-card-body>
            <z-card-image src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6edfebe98a9c2c83f02a1be8d0aa37d3&auto=format&fit=crop&w=500&q=80" />
            <z-card-footer>
                <z-button>Button</z-button>
                <z-button type="link">Button</z-button>
            </z-card-footer>

          </z-card>

        </z-column>
      </z-columns>

      <z-divider content="EXAMPLE" />

      <z-code lang="Vue">
import { ZCard, ZCardImage, ZCardHeader, ZCardTitle, ZCardSubtitle, ZCardBody, ZCardFooter, ZButton } from 'zutre'

&lt;z-card&gt;
  &lt;z-card-image src="/photo.jpg" /&gt;
  &lt;z-card-header&gt;
    &lt;z-card-title content="GitHub" :size="5" /&gt;
    &lt;z-card-subtitle content="Etiam tincidunt interdum risus" color="gray" /&gt;
  &lt;/z-card-header&gt;
  &lt;z-card-body&gt;
    &lt;p&gt;Nullam elementum fringilla faucibus. Maecenas massa augue, condimentum non neque eu, euismod accumsan turpis.&lt;/p&gt;
  &lt;/z-card-body&gt;
  &lt;z-card-footer&gt;
    &lt;z-button type="primary"&gt;Button&lt;/z-button&gt;
  &lt;/z-card-footer&gt;
&lt;/z-card&gt;
      </z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>CardImage <code>&lt;z-card-image /&gt;</code></h5>
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
            <z-td><code>src</code></z-td>
            <z-td>path to image</z-td>
            <z-td>String</z-td>
            <z-td><code>required</code></z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>
      <br>

      <h5>CardTitle <code>&lt;z-card-title /&gt;</code></h5>
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
            <z-td>tilte size</z-td>
            <z-td>Number</z-td>
            <z-td><code>1</code> to <code>6</code> where <code>1</code> is the biggest size</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>content</code></z-td>
            <z-td>tilte content</z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>
      <br>

      <h5>CardSubtitle <code>&lt;z-card-subtitle /&gt;</code></h5>
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
            <z-td><code>color</code></z-td>
            <z-td>subtitle color</z-td>
            <z-td>String</z-td>
            <z-td>Values: <code>primary</code>, <code>secondary</code>, <code>gark</code>, <code>gray</code>, <code>light</code>, <code>success</code>, <code>warning</code>, <code>error</code></z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>content</code></z-td>
            <z-td>subtilte content</z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
import {
  ZContainer, ZColumns, ZColumn, ZButton, ZButtonGroup, ZBreadcrumbs, ZCode,
  ZDivider, ZCard, ZCardHeader, ZCardTitle, ZCardSubtitle, ZCardFooter,
  ZCardBody, ZCardImage, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd,
} from './../components';

export default {
  name: 'DocsCards',
  components: {
    ZContainer, ZBreadcrumbs, ZButton, ZButtonGroup, ZCode, ZDivider,
    ZCard, ZCardHeader, ZCardTitle, ZCardSubtitle, ZColumns, ZColumn,
    ZCardImage, ZCardFooter, ZCardBody, ZTable, ZThead, ZTbody, ZTh, ZTr, ZTd,
  },
};
</script>
