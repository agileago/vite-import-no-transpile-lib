import {Autobind, VueComponent} from 'vue3-oop'
import { AjaxTable } from '@tmatrix/ui'
import {Column} from 'vxe-table'

@Autobind()
export default class App extends VueComponent {

  async onRequest(page: number, pageSize: number) {
    return []
  }

  render() {
    return (
      <div>
        <AjaxTable onRequest={this.onRequest}>
          <Column title={'aaa'} field={'aaa'}></Column>
        </AjaxTable>
      </div>
    )
  }
}
