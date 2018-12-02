import Vue from 'vue'
import './../scss/main.scss'

import ZButton from './Button'
import ZButtonGroup from './ButtonGroup'
import ZBreadcrumbs from './Breadcrumbs'
import ZBreadcrumbsItem from './BreadcrumbsItem'
import ZCard from './Card'
import ZCardTitle from './CardTitle'
import ZCardSubtitle from './CardSubtitle'
import ZCardHeader from './CardHeader'
import ZCardBody from './CardBody'
import ZCardFooter from './CardFooter'
import ZCardImage from './CardImage'
import ZCode from './Code'
import ZContainer from './Container'
import ZColumns from './Columns'
import ZColumn from './Column'
import ZDivider from './Divider'

import ZEmpty from './Empty'
import ZEmptyIcon from './EmptyIcon'
import ZEmptyAction from './EmptyAction'
import ZEmptyTitle from './EmptyTitle'
import ZEmptySubtitle from './EmptySubtitle'

import ZHero from './Hero'
import ZHeroBody from './HeroBody'

import ZLabel from './Label'
import ZLink from './Link'

import ZMenu from './Menu'
import ZMenuDivider from './MenuDivider'
import ZMenuItem from './MenuItem'

import ZTable from './Table'
import ZThead from './Thead'
import ZTbody from './Tbody'
import ZTr from './Tr'
import ZTd from './Td'
import ZTh from './Th'

import ZTile from './Tile'
import ZTileIcon from './TileIcon'
import ZTileContent from './TileContent'
import ZTileAction from './TileAction'
import ZTileTitle from './TileTitle'
import ZTileSubtitle from './TileSubtitle'

import ZToast from './Toast'
import ZToastTitle from './ToastTitle'
import ZToastBody from './ToastBody'



Vue.extend({
  mixins: [ZToast]
})

Vue.prototype.$zutre = {

  toast (options) {
    let $elNotify = document.getElementById('zutre-toast')
    let body = document.getElementsByTagName('body')[0]

    let pos = (typeof options.position === 'string') ? options.position : ''
    let $listNotify = null

    $listNotify = document.getElementsByClassName('toast-list '+ pos)

    if ($listNotify.length < 1) {
      $listNotify = document.createElement('div')
      $listNotify.className = 'toast-list '+ pos;
    } else {
      if (pos === 'bottom' || pos === 'top') {
        var i = 0
        var exist = false

        for(; i < $listNotify.length; i++) {
          if ($listNotify[i].classList.contains('left') || $listNotify[i].classList.contains('right')) continue;
          else  {
            exist = true
            $listNotify = $listNotify[i]
            break
          }
        }

        if (exist === false) {
          $listNotify = document.createElement('div')
          $listNotify.className = 'toast-list '+ pos; 
        }
      } else {
        $listNotify = $listNotify[0]
      }
    }

    body.appendChild($listNotify)

    if ($elNotify === null) {
      $elNotify = document.createElement('span')
      $elNotify.id = 'zutre-toast'

      $listNotify.appendChild($elNotify)
    }

    var componentClass = Vue.extend(ZToast)
    var $toast = new componentClass( { propsData: options } )
    
    $toast.$mount('#zutre-toast')
  }
}

const Components = {
  ZButton,
  ZButtonGroup,
  ZBreadcrumbs, 
  ZBreadcrumbsItem,
  ZCard,
  ZCardHeader,
  ZCardTitle,
  ZCardSubtitle,
  ZCardBody,
  ZCardFooter,
  ZCardImage,
  ZCode,
  ZContainer,
  ZColumns,
  ZColumn,
  ZDivider,

  ZEmpty,
  ZEmptyIcon,
  ZEmptyAction,
  ZEmptyTitle,
  ZEmptySubtitle,

  ZHero,
  ZHeroBody,
  ZLink,
  ZLabel,
  ZMenu,
  ZMenuDivider,
  ZMenuItem,
  ZTable,
  ZThead,
  ZTbody,
  ZTr,
  ZTd,
  ZTh,
  ZTile,
  ZTileIcon,
  ZTileContent,
  ZTileAction,
  ZTileTitle,
  ZTileSubtitle,
  ZToast,
  ZToastTitle,
  ZToastBody
}

export {
  ZButton,
  ZButtonGroup,
  ZBreadcrumbs,
  ZBreadcrumbsItem,
  ZCard,
  ZCardTitle,
  ZCardSubtitle,
  ZCardHeader,
  ZCardBody,
  ZCardFooter,
  ZCardImage,
  ZCode,
  ZContainer,
  ZColumns,
  ZColumn,

  ZEmpty,
  ZEmptyIcon,
  ZEmptyAction,
  ZEmptyTitle,
  ZEmptySubtitle,

  ZDivider,
  ZHero,
  ZHeroBody,
  ZLink,
  ZLabel,
  ZMenu,
  ZMenuDivider,
  ZMenuItem,
  ZTable,
  ZThead,
  ZTbody,
  ZTr,
  ZTd,
  ZTh,
  ZTile,
  ZTileIcon,
  ZTileContent,
  ZTileAction,
  ZTileTitle,
  ZTileSubtitle,
  ZToast,
  ZToastTitle,
  ZToastBody
}

export default Components