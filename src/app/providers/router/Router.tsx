import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {App} from "@/app/App";
import {WelcomeLazy} from "@/pages/landing";

const defaultFallback = <div>Loading...</div>

const routes = [
    {
        path: '/',
        element:
            <Suspense fallback={defaultFallback}>
                <App/>
            </Suspense>,
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={defaultFallback}>
                        <WelcomeLazy />
                    </Suspense>
                )
            }
        ]
    }
];

export const router = createBrowserRouter(routes);
export default routes;