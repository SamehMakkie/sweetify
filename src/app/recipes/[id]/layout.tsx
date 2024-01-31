import CommonPageWrapper from "@/views/CommonPageWrapper/CommonPageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe name - Sweetify",
};

interface SearchFilterProps {
  children: React.ReactNode;
}

const SearchLayout: React.FC<SearchFilterProps> = ({ children }) => {
  return <CommonPageWrapper>{children}</CommonPageWrapper>;
};

export default SearchLayout;
