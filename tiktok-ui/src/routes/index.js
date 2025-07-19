// Layouts
import { HeaderOnlyLayout } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/search', component: Search, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
