import './../scss/main.scss';

import ZAccordion from './Accordion';
import ZAvatar from './Avatar';
import ZButton from './Button';
import ZBadge from './Badge';
import ZButtonGroup from './ButtonGroup';
import ZBreadcrumbs from './Breadcrumbs';
import ZCard from './Card';
import ZChip from './Chip';
import ZCode from './Code';
import ZContainer from './Container';
import ZColumns from './Columns';
import ZColumn from './Column';
import ZDivider from './Divider';
import ZDrawer from './Drawer';
import ZEmpty from './Empty';
import ZHero from './Hero';
import ZIcon from './Icon';
import ZLabel from './Label';
import ZLink from './Link';
import ZMedia from './Media';
import ZMenu from './Menu';
import ZModal from './Modal';
import ZNav from './Nav';
import ZNavbar from './Navbar';
import ZPagination from './Pagination';
import ZStep from './Step';
import ZTab from './Tab';
import ZTable from './Table';
import ZTile from './Tile';
import ZToast from './Toast';

const Components = {
  ZAccordion,
  ZAvatar,
  ZBadge,
  ZButton,
  ZButtonGroup,
  ZBreadcrumbs,
  ZCard,
  ZChip,
  ZCode,
  ZContainer,
  ZColumns,
  ZColumn,
  ZDivider,
  ZDrawer,
  ZEmpty,
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
  ZStep,
  ZTab,
  ZTable,
  ZTile,
  ZToast,
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
