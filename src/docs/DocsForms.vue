<template>
    <z-container>
      <z-breadcrumbs :items="[
        { name: 'Home', link: { name: 'home' }}, 
        { name: 'Elements' }, 
        { name: 'Forms', link: { name: 'docsForms' }}
      ]" />
      <h4>Forms</h4>

      <p>
        Components: <code>&lt;z-input /&gt;</code>, <code>&lt;z-select /&gt;</code>
      </p>

      <z-divider content="INPUT / TEXTAREA" />
      <br>
      
      <z-input id="familyName" v-model="input1Value" label="Family name" maxlength="10" counter />

      <z-input list="langs" autocomplete="off" label="Autocomplete field" />
      <datalist id="langs">
        <option>NodeJS</option>
        <option>Go</option>
        <option>JavaScript</option>
        <option>PHP</option>
        <option>Java</option>
        <option>C++</option>
      </datalist>

      <z-input type="textarea" v-model="input2Value" label="Message" maxlength="100" counter />

      <z-code lang="Vue">
&lt;z-input v-model="inputValue" label="Family name" maxlength="10" counter /&gt;

&lt;z-input list="langs" autocomplete="off" label="Autocomplete field" /&gt;
&lt;datlist id="langs"&gt;
  &lt;option&gt;NodeJS&lt;/option&gt;
  &lt;option&gt;Go&lt;/option&gt;
  &lt;option&gt;JavaScript&lt;/option&gt;
  &lt;option&gt;PHP&lt;/option&gt;
  &lt;option&gt;Java&lt;/option&gt;
  &lt;option&gt;C++&lt;/option&gt;
&lt;/datalist&gt;

&lt;z-input type="textarea" v-model="textareaValue" label="Message" maxlength="100" counter /&gt;
      </z-code>

      <z-input placeholder="Type your email" loading />

      <z-input type="textarea" label="Message" maxlength="100" counter loading />

      <z-code lang="Vue">
&lt;z-input placeholder="Type your email" loading /&gt;
      </z-code>

      <br>
      <z-divider content="SELECT" />
      <br>

      <z-select v-model="selectValue">
        <option >Select option</option>
        <option value="val_1">Option 1</option>
        <option value="val_2">Option 2</option>
        <option value="val_3">Option 3</option>
        <option value="val_4">Option 4</option>
      </z-select>

      Selected: {{ selectValue }}

      <z-select label="Country" value="val_2">
        <option value="val_1">Option 1</option>
        <option value="val_2">Option 2</option>
        <option value="val_3">Option 3</option>
        <option value="val_4">Option 4</option>
      </z-select>

      <z-select label="Country" value="val_3" loading>
        <option value="val_1">Option 1</option>
        <option value="val_2">Option 2</option>
        <option value="val_3">Option 3</option>
        <option value="val_4">Option 4</option>
      </z-select>

      <br>
      <z-divider content="RADIO" />
      <br>

      <z-radio name="gender" v-model="radioInputValue" z-value="male">Male</z-radio>
      <z-radio name="gender" v-model="radioInputValue" z-value="female">Female</z-radio>

      Selected: {{ radioInputValue }}

      <z-divider content="API" />
      <h4>API</h4>

      <h5>Input <code>&lt;z-input /&gt;</code></h5>
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
            <z-td><code>label</code></z-td>
            <z-td>
              if set will generate label for field
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>type</code></z-td>
            <z-td>
              any input type plus textarea
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>value</code></z-td>
            <z-td>
              
            </z-td>
            <z-td>String|Number</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>v-model</code></z-td>
            <z-td>
              to bind value to your data
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>maxlength</code></z-td>
            <z-td>
            </z-td>
            <z-td>String|Number</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>counter</code></z-td>
            <z-td>
              set <code>true</code> to display characters counter - <code>maxlength</code> must be set
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>
          <z-tr>
            <z-td><code>loading</code></z-td>
            <z-td>
              set <code>true</code> to display loader
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>

          <z-tr>
            <z-td colspan="5">
              <strong>Events</strong>
            </z-td>
          </z-tr>

          <z-tr>
            <z-td><code>blur</code></z-td>
            <z-td>
              emits on blur
            </z-td>
            <z-td>Event</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>focus</code></z-td>
            <z-td>
              emits on focus
            </z-td>
            <z-td>Event</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

      <br><br>
      <h5>Select <code>&lt;z-select /&gt;</code></h5>
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
            <z-td><code>label</code></z-td>
            <z-td>
              if set will generate label for field
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>v-model</code></z-td>
            <z-td>
              to bind value to your data
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>loading</code></z-td>
            <z-td>
              set <code>true</code> to display loader
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>

          <z-tr>
            <z-td colspan="5">
              <strong>Events</strong>
            </z-td>
          </z-tr>

          <z-tr>
            <z-td><code>blur</code></z-td>
            <z-td>
              emits on blur
            </z-td>
            <z-td>Event</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>focus</code></z-td>
            <z-td>
              emits on focus
            </z-td>
            <z-td>Event</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

      <br><br>
      <h5>Radio <code>&lt;z-radio /&gt;</code></h5>
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
            <z-td><code>label</code></z-td>
            <z-td>
              if set will generate label for field
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>z-value</code></z-td>
            <z-td>
              value for radio input needs to be passed by z-value
            </z-td>
            <z-td>String|Number|Array|Function|Object</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>v-model</code></z-td>
            <z-td>
              to bind value to your data
            </z-td>
            <z-td>String</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>

          <z-tr>
            <z-td colspan="5">
              <strong>Events</strong>
            </z-td>
          </z-tr>

          <z-tr>
            <z-td><code>blur</code></z-td>
            <z-td>
              emits on blur
            </z-td>
            <z-td>Event</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
          <z-tr>
            <z-td><code>focus</code></z-td>
            <z-td>
              emits on focus
            </z-td>
            <z-td>Event</z-td>
            <z-td>---</z-td>
            <z-td>---</z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  data() {
    return {
      input1Value: '',
      input2Value: '',
      selectValue: '',
      radioInputValue: 'male',
    }
  },
  methods: {
    btnClick() {
      console.log(this.input1Value);
    },
    btnClick2() {
      console.log(this.selectValue);
    },
    radioBtn() {
      console.log(this.radioInputValue);
    }
  },
}
</script>
