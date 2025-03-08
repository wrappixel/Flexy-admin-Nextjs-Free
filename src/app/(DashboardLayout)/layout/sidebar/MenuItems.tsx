import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAlertCircle,
  IconAppWindow,
  IconApps,
  IconBasket,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderStyle2,
  IconBorderTop,
  IconBorderVertical,
  IconBox,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBoxMultiple,
  IconCalendar,
  IconChartArcs,
  IconChartArea,
  IconChartCandle,
  IconChartDonut3,
  IconChartDots,
  IconChartLine,
  IconChartPie,
  IconChartRadar,
  IconCurrencyDollar,
  IconEdit,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconGitMerge,
  IconHelp,
  IconLayout,
  IconLogin,
  IconMail,
  IconMessage2,
  IconNotes,
  IconPackage,
  IconPoint,
  IconRotate,
  IconServer,
  IconSettings,
  IconShoppingBag,
  IconTicket,
  IconUserCircle,
  IconUserPlus,
  IconZoomCode,
  IconLockAccess,
  IconKeyframes,
  IconLayersIntersect,
  IconClipboardList,
  IconChartHistogram,
  IconChartPie2,
  IconChartScatter,
  IconChartPpf,
  IconChartArcs3,
  IconListTree,
  IconHome,
  IconLayoutGrid,
  IconUser,
  IconPhoto,
  IconStar,
  IconInfoCircle,
  IconTable,
  IconCircleDot,
  IconLayoutSidebar
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "HOME",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Analytical",
    icon: IconChartPie,
    href: "https://flexy-next-js-dashboard.vercel.app/",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "eCommerce",
    icon: IconShoppingBag,
    href: "https://flexy-next-js-dashboard.vercel.app/dashboards/dashboard2",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Modern",
    icon: IconServer,
    href: "https://flexy-next-js-dashboard.vercel.app/dashboards/dashboard3",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Frontend Pages",
    icon: IconKeyframes,
    href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/homepage",
    bgcolor: "error",
    children: [
      {
        id: uniqueId(),
        title: "Homepage",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/homepage",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "About Us",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/about",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Blog",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/blog",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Blog Details",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/blog/Blog_1",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Contact",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/contact",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Portfolio",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/portfolio",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Pricing",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/pricing",
        chip: "pro",
      },
    ],
  },

  {
    navlabel: true,
    subheader: "UTILITIES",
  },
  {
    id: uniqueId(),
    title: "Buttons",
    icon: IconCircleDot,
    href: "/ui-components/buttons",
  },
  {
    id: uniqueId(),
    title: "Forms",
    icon: IconTable,
    href: "/ui-components/forms",
  },
  {
    id: uniqueId(),
    title: "Alerts",
    icon: IconInfoCircle,
    href: "/ui-components/alerts",
  },
  {
    id: uniqueId(),
    title: "Ratings",
    icon: IconStar,
    href: "/ui-components/ratings",
  },
  {
    id: uniqueId(),
    title: "Images",
    icon: IconPhoto,
    href: "/ui-components/images",
  },
  {
    id: uniqueId(),
    title: "Pagination",
    icon: IconUser,
    href: "/ui-components/pagination",
  },
  {
    id: uniqueId(),
    title: "Tables",
    icon: IconLayoutGrid,
    href: "/ui-components/table",
  },

  {
    navlabel: true,
    subheader: "APPS",
  },
  {
    id: uniqueId(),
    title: "Contacts",
    icon: IconPackage,
    chip: "pro",

    href: "https://flexy-next-js-dashboard.vercel.app/apps/contacts",
  },
  {
    id: uniqueId(),
    title: "Chats",
    icon: IconMessage2,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/chats",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Notes",
    icon: IconNotes,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/notes",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Calendar",
    icon: IconCalendar,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/calendar",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Email",
    icon: IconMail,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/email",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Tickets",
    icon: IconTicket,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/tickets",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Kanban",
    icon: IconLayersIntersect,
    bgcolor: "secondary",
    href: "https://flexy-next-js-dashboard.vercel.app/apps/kanban",
    chip: "pro",
  },


  {
    id: uniqueId(),
    title: "Blog",
    icon: IconChartDonut3,
    href: "/apps/blog/",
    children: [
      {
        id: uniqueId(),
        title: "Posts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/blog/post",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
        chip: "pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Ecommerce",
    icon: IconBasket,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/shop",
    children: [
      {
        id: uniqueId(),
        title: "Shop",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/shop",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/detail/1",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Checkout",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/checkout",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Add Product",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/add-product",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Edit Product",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/edit-product",
        chip: "pro",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "Users",
    icon: IconUserCircle,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/profile",
    children: [
      {
        id: uniqueId(),
        title: "Profile",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/profile",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Followers",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/followers",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Friends",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/friends",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Gallery",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/gallery",
        chip: "pro",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "Invoice",
    icon: IconClipboardList,
    bgcolor: "warning",
    href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/list",
    children: [
      {
        id: uniqueId(),
        title: "List",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Details",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/detail/PineappleInc",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Create",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/create",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Edit",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/edit/PineappleInc",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "PAGES",
  },

  {
    id: uniqueId(),
    title: "Pages",
    icon: IconLayoutSidebar,
    href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",
    chip: "pro",
    children: [{
      id: uniqueId(),
      title: "Roll Base Access",
      icon: IconLockAccess,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/casl",
      chip: "pro",
    },

    {
      id: uniqueId(),
      title: "Pricing",
      icon: IconCurrencyDollar,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/pricing",
      chip: "pro",
    },
    {
      id: uniqueId(),
      title: "Account Setting",
      icon: IconUserCircle,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/account-settings",
      chip: "pro",
    },
    {
      id: uniqueId(),
      title: "FAQ",
      icon: IconHelp,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/faq",
      chip: "pro",
    },
    ],

  },






  {
    id: uniqueId(),
    title: "Widgets",
    icon: IconLayout,
    href: "https://flexy-next-js-dashboard.vercel.app/widgets/cards",

    children: [
      {
        id: uniqueId(),
        title: "Cards",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/widgets/cards",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Banners",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/widgets/banners",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/widgets/charts",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "FORMS",
  },
  {
    id: uniqueId(),
    title: "Form Elements",
    icon: IconApps,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/autocomplete",
    children: [
      {
        id: uniqueId(),
        title: "Autocomplete",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/autocomplete",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Button",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/button",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Checkbox",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/checkbox",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Radio",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/radio",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Date Time",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/date-time",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Slider",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/slider",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Switch",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/switch",
        chip: "pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Form Layout",
    icon: IconFileDescription,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-layout",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Horizontal",
    icon: IconBoxAlignBottom,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-horizontal",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Vertical",
    icon: IconBoxAlignLeft,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-vertical",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Custom",
    icon: IconFileDots,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-custom",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Wizard",
    icon: IconFiles,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-wizard",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Validation",
    icon: IconFiles,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-validation",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Tiptap Editor",
    icon: IconEdit,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-tiptap",
    chip: "pro",
  },
  {
    navlabel: true,
    subheader: "TABLES",
  },

  {
    id: uniqueId(),
    title: "Tables",
    icon: IconBorderAll,
    href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",
    chip: "pro",
    children: [

      {
        id: uniqueId(),
        title: "Basic",
        icon: IconBorderAll,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/basic",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Collapsible",
        icon: IconBorderHorizontal,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/collapsible",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Enhanced",
        icon: IconBorderInner,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/enhanced",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Fixed Header",
        icon: IconBorderVertical,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/fixed-header",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Pagination",
        icon: IconBorderTop,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/pagination",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Search",
        icon: IconBorderStyle2,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/search",
        chip: "pro",
      },

    ]
  },

  {
    id: uniqueId(),
    title: "React Table",
    icon: IconBorderStyle2,
    href: "https://flexy-next-js-dashboard.vercel.app/react-tables/basic",
    children: [
      {
        id: uniqueId(),
        title: "Basic",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/basic",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Dense",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/dense",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Filter",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/filter",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Row Selection",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/row-selection",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Pagination",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/pagination",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Sorting",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/sorting",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Column Visibility",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/column-visiblity",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Drag n Drop",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/drag-n-drop",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Editable",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/editable",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Empty",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/empty",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Expand",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/expanding",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Sticky",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/sticky",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "UI",
  },
  {
    id: uniqueId(),
    title: "Ui Components",
    icon: IconBox,
    href: "https://flexy-next-js-dashboard.vercel.app/ui-components/alert",
    children: [
      {
        id: uniqueId(),
        title: "Alert",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/alert",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Accordion",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/accordion",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Avatar",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/avatar",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Chip",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/chip",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Dialog",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/dialog",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Popover",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/popover",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Rating",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/rating",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Tabs",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/tabs",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Tooltip",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/tooltip",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Transfer List",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/transfer-list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Typography",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/typography",
        chip: "pro",
      },
    ],
  },

  {
    navlabel: true,
    subheader: "MUI CHARTS & TREES",
  },
  {
    id: uniqueId(),
    title: "Mui Charts",
    icon: IconChartLine,
    href: "https://flexy-next-js-dashboard.vercel.app/muicharts/barcharts",
    chip: "pro",
    children: [
      {
        id: uniqueId(),
        title: "Bar Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/barcharts",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Line Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/linecharts/line",
        chip: "pro",
        children: [
          {
            id: uniqueId(),
            title: "Lines",
            icon: IconPoint,
            href: "https://flexy-next-js-dashboard.vercel.app/muicharts/linecharts/line",
            chip: "pro",
          },
          {
            id: uniqueId(),
            title: "Area",
            icon: IconPoint,
            href: "https://flexy-next-js-dashboard.vercel.app/muicharts/linecharts/area",
            chip: "pro",
          },
        ],
      },
      {
        id: uniqueId(),
        title: "Pie Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/piecharts",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Scatter Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/scattercharts",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Sparkline Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/sparklinecharts",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Gauge Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/gaugecharts",
        chip: "pro",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "TreeView",
    icon: IconListTree,
    href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-items",
    chip: "pro",
    children: [
      {
        id: uniqueId(),
        title: "Items",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-items",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Selection",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-selection",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Expansion",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-expansion",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Customization",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-customization",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Focus",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-focus",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "Auth",
  },

  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },

  {
    id: uniqueId(),
    title: "AuthPage",
    icon: IconLogin,
    href: "https://spike-nextjs-pro-main.vercel.app/auth/auth1/login",
    chip: "pro",

    children: [
      {
        id: uniqueId(),
        title: "Side Login",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/login",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Login",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/login",
        chip: "pro",
      },

      {
        id: uniqueId(),
        title: "Side Register",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/register",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Register",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/register",
        chip: "pro",
      },





      {
        id: uniqueId(),
        title: "Side Forgot PWD",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/forgot-password",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Forgot PWD",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/forgot-password",
        chip: "pro",
      },



      {
        id: uniqueId(),
        title: "Side Two Steps",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/two-steps",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Two Steps",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/two-steps",
        chip: "pro",
      },

      {
        id: uniqueId(),
        title: "Error",
        icon: IconAlertCircle,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/error",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Maintenance",
        icon: IconSettings,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/maintenance",
        chip: "pro",
      },]
  },




  {
    navlabel: true,
    subheader: "Multi DD",
  },

  {
    id: uniqueId(),
    title: "Menu Level",
    icon: IconBoxMultiple,
    href: "/menulevel/",
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: IconPoint,
        href: "/l1",
      },
      {
        id: uniqueId(),
        title: "Level 1.1",
        icon: IconPoint,
        href: "/l1.1",
        children: [
          {
            id: uniqueId(),
            title: "Level 2",
            icon: IconPoint,
            href: "/l2",
          },
          {
            id: uniqueId(),
            title: "Level 2.1",
            icon: IconPoint,
            href: "/l2.1",
            children: [
              {
                id: uniqueId(),
                title: "Level 3",
                icon: IconPoint,
                href: "/l3",
              },
              {
                id: uniqueId(),
                title: "Level 3.1",
                icon: IconPoint,
                href: "/l3.1",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default Menuitems;
