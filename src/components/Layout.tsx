import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
  memo,
} from "react";

// Theme context
interface ThemeContextType {
  currentTheme: string;
  toggleTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "matsu",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface LayoutProps {
  children: ReactNode;
}

function LayoutComponent({ children }: LayoutProps) {
  const [currentTheme, setCurrentTheme] = useState("matsu");

  const toggleTheme = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    // Update texture visibility
    const texture = document.querySelector(".texture-overlay");
    if (texture) {
      (texture as HTMLElement).style.display =
        theme === "matsu" ? "block" : "none";
    }
  };

  useEffect(() => {
    toggleTheme("matsu");
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {/* Texture overlay - only visible when matsu theme is active */}
      <div
        className={`texture ${currentTheme === "matsu" ? "block" : "hidden"}`}
      />
      <div className="min-h-screen bg-base-100 relative font-nunito">
        <main className="mx-auto">{children}</main>
      </div>
    </ThemeContext.Provider>
  );
}

// Memoize the layout component to prevent unnecessary re-renders
const Layout = memo(LayoutComponent);
export default Layout;
