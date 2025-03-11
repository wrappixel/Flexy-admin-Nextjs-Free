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
  IconLayoutSidebar,
  IconTypography,
  IconCheckbox,
  IconRadar,
  IconSlideshow,
  IconCaretUpDown,
  IconAperture
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
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "eCommerce",
    icon: IconShoppingBag,
    href: "https://flexy-next-js-dashboard.vercel.app/dashboards/dashboard2",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Modern",
    icon: IconServer,
    href: "https://flexy-next-js-dashboard.vercel.app/dashboards/dashboard3",
    chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "About Us",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/about",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Blog",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/blog",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Blog Details",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/blog/Blog_1",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Contact",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/contact",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Portfolio",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/portfolio",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Pricing",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/frontend-pages/pricing",
        chip: "Pro",
      },
    ],
  },

  {
    navlabel: true,
    subheader: "UTILITIES",
  },

  {
    id: uniqueId(),
    title: 'Autocomplete',
    icon: IconTypography,
    href: '/utilities/autocomplete',
  },
  {
    id: uniqueId(),
    title: 'Checkbox',
    icon: IconCheckbox,
    href: '/utilities/checkbox',
  },
  {
    id: uniqueId(),
    title: 'Radio',
    icon: IconRadar,
    href: '/utilities/radio',
  },
  {
    id: uniqueId(),
    title: 'Slider',
    icon: IconSlideshow,
    href: '/utilities/slider',
  },

  {
    id: uniqueId(),
    title: 'Switch',
    icon: IconCaretUpDown,
    href: '/utilities/switch',
  },
  {
    id: uniqueId(),
    title: "Buttons",
    icon: IconCircleDot,
    href: "/utilities/buttons",
  },
  {
    id: uniqueId(),
    title: "Forms",
    icon: IconTable,
    href: "/utilities/forms",
  },
  {
    id: uniqueId(),
    title: "Alerts",
    icon: IconInfoCircle,
    href: "/utilities/alerts",
  },
  {
    id: uniqueId(),
    title: "Pagination",
    icon: IconUser,
    href: "/utilities/pagination",
  },
  {
    id: uniqueId(),
    title: "Tables",
    icon: IconLayoutGrid,
    href: "/utilities/table",
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },

  {
    navlabel: true,
    subheader: "APPS",
  },
  {
    id: uniqueId(),
    title: "Contacts",
    icon: IconPackage,
    chip: "Pro",

    href: "https://flexy-next-js-dashboard.vercel.app/apps/contacts",
  },
  {
    id: uniqueId(),
    title: "Chats",
    icon: IconMessage2,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/chats",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Notes",
    icon: IconNotes,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/notes",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Calendar",
    icon: IconCalendar,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/calendar",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Email",
    icon: IconMail,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/email",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Tickets",
    icon: IconTicket,
    href: "https://flexy-next-js-dashboard.vercel.app/apps/tickets",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Kanban",
    icon: IconLayersIntersect,
    bgcolor: "secondary",
    href: "https://flexy-next-js-dashboard.vercel.app/apps/kanban",
    chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
        chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/detail/1",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/list",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Checkout",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/checkout",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Add Product",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/add-product",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Edit Product",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/ecommerce/edit-product",
        chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Followers",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/followers",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Friends",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/friends",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Gallery",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/user-profile/gallery",
        chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Details",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/detail/PineappleInc",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Create",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/create",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Edit",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/apps/invoice/edit/PineappleInc",
        chip: "Pro",
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
    chip: "Pro",
    children: [{
      id: uniqueId(),
      title: "Roll Base Access",
      icon: IconLockAccess,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/casl",
      chip: "Pro",
    },

    {
      id: uniqueId(),
      title: "Pricing",
      icon: IconCurrencyDollar,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/pricing",
      chip: "Pro",
    },
    {
      id: uniqueId(),
      title: "Account Setting",
      icon: IconUserCircle,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/account-settings",
      chip: "Pro",
    },
    {
      id: uniqueId(),
      title: "FAQ",
      icon: IconHelp,
      href: "https://flexy-next-js-dashboard.vercel.app/theme-pages/faq",
      chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Banners",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/widgets/banners",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/widgets/charts",
        chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Button",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/button",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Checkbox",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/checkbox",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Radio",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/radio",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Date Time",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/date-time",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Slider",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/slider",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Switch",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/forms/form-elements/switch",
        chip: "Pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Form Layout",
    icon: IconFileDescription,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-layout",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Form Horizontal",
    icon: IconBoxAlignBottom,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-horizontal",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Form Vertical",
    icon: IconBoxAlignLeft,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-vertical",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Form Custom",
    icon: IconFileDots,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-custom",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Form Wizard",
    icon: IconFiles,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-wizard",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Form Validation",
    icon: IconFiles,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-validation",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Tiptap Editor",
    icon: IconEdit,
    href: "https://flexy-next-js-dashboard.vercel.app/forms/form-tiptap",
    chip: "Pro",
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
    chip: "Pro",
    children: [

      {
        id: uniqueId(),
        title: "Basic",
        icon: IconBorderAll,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/basic",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Collapsible",
        icon: IconBorderHorizontal,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/collapsible",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Enhanced",
        icon: IconBorderInner,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/enhanced",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Fixed Header",
        icon: IconBorderVertical,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/fixed-header",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Pagination",
        icon: IconBorderTop,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/pagination",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Search",
        icon: IconBorderStyle2,
        href: "https://flexy-next-js-dashboard.vercel.app/tables/search",
        chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Dense",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/dense",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Filter",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/filter",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Row Selection",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/row-selection",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Pagination",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/pagination",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Sorting",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/sorting",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Column Visibility",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/column-visiblity",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Drag n Drop",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/drag-n-drop",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Editable",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/editable",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Empty",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/empty",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Expand",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/expanding",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Sticky",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/react-tables/sticky",
        chip: "Pro",
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
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Accordion",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/accordion",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Avatar",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/avatar",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Chip",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/chip",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Dialog",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/dialog",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/list",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Popover",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/popover",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Rating",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/rating",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Tabs",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/tabs",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Tooltip",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/tooltip",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Transfer List",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/transfer-list",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Typography",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/ui-components/typography",
        chip: "Pro",
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
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: "Bar Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/barcharts",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Line Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/linecharts/line",
        chip: "Pro",
        children: [
          {
            id: uniqueId(),
            title: "Lines",
            icon: IconPoint,
            href: "https://flexy-next-js-dashboard.vercel.app/muicharts/linecharts/line",
            chip: "Pro",
          },
          {
            id: uniqueId(),
            title: "Area",
            icon: IconPoint,
            href: "https://flexy-next-js-dashboard.vercel.app/muicharts/linecharts/area",
            chip: "Pro",
          },
        ],
      },
      {
        id: uniqueId(),
        title: "Pie Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/piecharts",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Scatter Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/scattercharts",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Sparkline Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/sparklinecharts",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Gauge Charts",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/muicharts/gaugecharts",
        chip: "Pro",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "TreeView",
    icon: IconListTree,
    href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-items",
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: "Items",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-items",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Selection",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-selection",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Expansion",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-expansion",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Customization",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-customization",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Focus",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/mui-trees/simpletree/simpletree-focus",
        chip: "Pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "AUTH",
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
    chip: "Pro",

    children: [
      {
        id: uniqueId(),
        title: "Side Login",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/login",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Login",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/login",
        chip: "Pro",
      },

      {
        id: uniqueId(),
        title: "Side Register",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/register",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Register",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/register",
        chip: "Pro",
      },





      {
        id: uniqueId(),
        title: "Side Forgot PWD",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/forgot-password",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Forgot PWD",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/forgot-password",
        chip: "Pro",
      },



      {
        id: uniqueId(),
        title: "Side Two Steps",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth1/two-steps",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Two Steps",
        icon: IconPoint,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/auth2/two-steps",
        chip: "Pro",
      },

      {
        id: uniqueId(),
        title: "Error",
        icon: IconAlertCircle,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/error",
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: "Maintenance",
        icon: IconSettings,
        href: "https://flexy-next-js-dashboard.vercel.app/auth/maintenance",
        chip: "Pro",
      },]
  },




  {
    navlabel: true,
    subheader: "MULTI DD",
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
