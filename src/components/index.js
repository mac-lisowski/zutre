import './../scss/main.scss';

import ZAccordion from './accordion';
import ZAvatar from './avatar';
import ZBadge from './badge';
import ZBar from './bar';
import ZButton from './button';
import ZBreadcrumbs from './breadcrumbs';
import ZCard from './card';
import ZChip from './chip';
import ZCode from './code';
import ZContainer from './container';
import ZDivider from './divider';
import ZDrawer from './drawer';
import ZEmpty from './empty';
import ZForm from './form';
import ZHero from './hero';
import ZIcon from './icon';
import ZLabel from './label';
import ZLink from './link';
import ZMedia from './media';
import ZMenu from './menu';
import ZModal from './modal';
import ZNav from './nav';
import ZNavbar from './navbar';
import ZPagination from './pagination';
import ZPanel from './panel';
import ZPopover from './popover';
import ZStep from './step';
import ZTab from './tab';
import ZTable from './table';
import ZTableData from './tabledata';
import ZCurcularProgress from './circularprogress'
import ZTile from './tile';
import ZToast from './toast';
import ZTooltip from './tooltip';

const Components = {
  ZAccordion,
  ZAvatar,
  ZBadge,
  ZBar,
  ZButton,
  ZBreadcrumbs,
  ZCard,
  ZChip,
  ZCode,
  ZContainer,
  ZDivider,
  ZDrawer,
  ZEmpty,
  ZForm,
  ZHero,
  ZIcon,
  ZLink,
  ZLabel,
  ZMedia,
  ZMenu,
  ZModal,
  ZNav,
  ZNavbar,
  ZPagination,
  ZPanel,
  ZPopover,
  ZStep,
  ZTab,
  ZTable,
  ZTableData,
  ZTile,
  ZToast,
  ZTooltip,
  ZCurcularProgress,
}

export const Zutre = {
  install(vue) {
    vue.prototype.$zutre = vue.$zutre || {};

    for (let componentKey in Components) {
      vue.use(Components[componentKey]);
    }

  }
};

export default Components;
