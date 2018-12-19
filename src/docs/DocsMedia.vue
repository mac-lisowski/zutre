<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Elements' }, { name: 'Media', link: { name: 'docsMedia' }}]" />
      <h4>Media</h4>

      <p>Media includes responsive images, figures and video classes.</p>

      <p>
        Components: <code>&lt;z-media /&gt;</code>
      </p>

      <p>Photo by <a href="https://unsplash.com/photos/PRcowEarMxE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="nofollow">Ibrahim Asad</a></p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-columns>
        <z-column>
          <z-media src="https://images.unsplash.com/photo-1542034817-0a5672492f98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a4c1cad251345ee695dae2b7ca8ad50&auto=format&fit=crop&w=490&q=80" />
        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-media src="..." /&gt;
</z-code>

      <z-divider content="RESPONSIVE EXAMPLE" />
      <br>

      <z-columns>
        <z-column>
          <z-media responsive src="https://images.unsplash.com/photo-1542034817-0a5672492f98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a4c1cad251345ee695dae2b7ca8ad50&auto=format&fit=crop&w=1390&q=80" />
        </z-column>
      </z-columns>

<z-code lang="Vue">
&lt;z-media responsive src="..." /&gt;
</z-code>

      <z-divider content="COVER / CONTAN EXAMPLE" />
      <br>

      <z-columns>
        <z-column :sizeLG="12" :size="6">
          <z-media cover caption="cover = true" src="https://images.unsplash.com/photo-1542034817-0a5672492f98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a4c1cad251345ee695dae2b7ca8ad50&auto=format&fit=crop&w=1390&q=80" />
        </z-column>

        <z-column :sizeLG="12" :size="6">
          <z-media contain caption="contain = true" src="https://images.unsplash.com/photo-1542034817-0a5672492f98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a4c1cad251345ee695dae2b7ca8ad50&auto=format&fit=crop&w=1390&q=80" />
        </z-column>
      </z-columns>

       <z-divider content="CAPTION EXAMPLE" />
      <br>

      <z-columns>
        <z-column :size="12">
          <z-media responsive caption="responsive image with caption on the right" captionPosition="right" src="https://images.unsplash.com/photo-1542034817-0a5672492f98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a4c1cad251345ee695dae2b7ca8ad50&auto=format&fit=crop&w=1390&q=80" />
        </z-column>
      </z-columns>
<z-code lang="Vue">
&lt;z-media responsive caption="responsive image with caption on the right" captionPosition="right" src="..." /&gt;
</z-code>

      <z-divider />
      <h4>Video</h4>

      <z-columns>
        <z-column :size="12">

          <z-media video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/z6hQqgvGI4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </z-media>

        </z-column>
      </z-columns>
<z-code lang="Vue">
&lt;z-media video&gt;
  &lt;iframe width="560" height="315" src="https://www.youtube.com/embed/z6hQqgvGI4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;
&lt;/z-media&gt;

OR

&lt;z-media video src="..."&gt;
  ...
&lt;/z-media&gt;

to generate:

&lt;video src="..."&gt;...&lt;/video&gt;
</z-code>

      <z-divider content="RESPONSIVE VIDEO" />

      <z-columns>
        <z-column :size="9" mxAuto>

          <z-media video responsive>
            <iframe width="320" height="315" src="https://www.youtube.com/embed/z6hQqgvGI4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </z-media>

        </z-column>
      </z-columns>
<z-code lang="Vue">
&lt;z-media video responsive&gt;
  &lt;iframe width="560" height="315" src="https://www.youtube.com/embed/z6hQqgvGI4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;
&lt;/z-media&gt;
</z-code>



      <z-divider content="API" />
      <h4>API</h4>

      <h5>Media <code>&lt;z-media /&gt;</code></h5>
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
            <z-td>
              path to media file image / video
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>alt</code></z-td>
            <z-td>
              alternate text for media file
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>caption</code></z-td>
            <z-td>
              caption text
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>captionPosition</code></z-td>
            <z-td>
              caption position
            </z-td>
            <z-td>String</z-td>
            <z-td><code>left</code>, <code>right</code>, <code>center</code></z-td>
            <z-td>center</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>responsive</code></z-td>
            <z-td>
              if media is responsive
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>cover</code></z-td>
            <z-td>
              apply cover styel
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>contain</code></z-td>
            <z-td>
              apply contain style
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>video</code></z-td>
            <z-td>
              if media is a video
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td>false</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsHero',
}
</script>
<style lang="scss">
.docs-container {
  figure.figure {
    > .img-fit-cover, > .img-fit-contain {
      height: 10rem;
    }
  }
}
</style>
