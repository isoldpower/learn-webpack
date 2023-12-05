import ReactDOM from "react-dom/client";
import React, {StrictMode, Suspense} from "react";
import {App} from "@/components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Shop} from "@/pages/shop";
import {About} from "@/pages/about";
import {Home} from "@/pages/home";

const root = document.getElementById('root');
if(!root) throw new SyntaxError('root not found');

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element:
                    <Suspense fallback={'Loading...'}>
                        <About />
                    </Suspense>
            },
            {
                path: '/shop',
                element:
                    <Suspense fallback={'Loading...'}>
                        <Shop />
                    </Suspense>
            },
            {
                path: '/',
                element:
                    <Suspense fallback={'Loading...'}>
                        <Home />
                    </Suspense>
            }
        ]
    }
])

ReactDOM.createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)