import { createContext, useState } from "react";

interface DashboardContextProps {
    isMobileSidebar: boolean,
    setIsMobileSidebar: (value: boolean) => void,
    isSidebarOpen: boolean,
    setSidebarOpen: (value: boolean) => void
}

let initDashboard = {
    isMobileSidebar: false,
    setIsMobileSidebar: () => { },
    isSidebarOpen: false,
    setSidebarOpen: () => { }
}

export const DashboardContext = createContext<DashboardContextProps>(initDashboard);

export const DashboardContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMobileSidebar, setIsMobileSidebar] = useState(false)
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <DashboardContext.Provider value={{ isMobileSidebar, setIsMobileSidebar, isSidebarOpen, setSidebarOpen }} >
            {children}
        </DashboardContext.Provider>
    )
}