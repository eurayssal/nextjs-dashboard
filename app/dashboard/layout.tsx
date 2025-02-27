import SideNav from "../ui/dashboard/sidenav";
/*
Um benefício de usar layouts no Next.js é que, na navegação, apenas os 
componentes da página são atualizados, enquanto o layout não é renderizado novamente.
Isso é chamado de renderização parcial, que preserva o estado React do lado do cliente 
no layout ao fazer a transição entre as páginas.
*/
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}