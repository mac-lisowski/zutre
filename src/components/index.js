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
import ZEmptyIcon from './EmptyIcon';
import ZEmptyAction from './EmptyAction';
import ZEmptyTitle from './EmptyTitle';
import ZEmptySubtitle from './EmptySubtitle';

import ZHero from './Hero';
import ZIcon from './Icon';
import ZLabel from './Label';
import ZLink from './Link';

import ZMedia from './Media';

import ZMenu from './Menu';
import ZMenuDivider from './MenuDivider';
import ZMenuItem from './MenuItem';

import ZModal from './Modal';
import ZNav from './Nav';

import ZNavbar from './Navbar';
import ZNavbarSection from './NavbarSection';

import ZStep from './Step';
import ZStepItem from './StepItem';

import ZTable from './Table';
import ZThead from './Thead';
import ZTbody from './Tbody';
import ZTr from './Tr';
import ZTd from './Td';
import ZTh from './Th';

import ZTile from './Tile';
import ZTileIcon from './TileIcon';
import ZTileContent from './TileContent';
import ZTileAction from './TileAction';
import ZTileTitle from './TileTitle';
import ZTileSubtitle from './TileSubtitle';

import ZToast from './Toast';
import ZToastTitle from './ToastTitle';
import ZToastBody from './ToastBody';

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
  ZEmptyIcon,
  ZEmptyAction,
  ZEmptyTitle,
  ZEmptySubtitle,

  ZHero,
  ZIcon,
  ZLink,
  ZLabel,
  ZMedia,
  ZMenu,
  ZMenuDivider,
  ZMenuItem,
  ZModal,
  ZNav,
  ZNavbar,
  ZNavbarSection,
  ZStep,
  ZStepItem,
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

export const Zutre = {
  install(vue) {
    vue.prototype.$zutre = vue.$zutre || {};

    for (let componentKey in Components) {
      vue.use(Components[componentKey]);
    }

  }
};

export default Components;
