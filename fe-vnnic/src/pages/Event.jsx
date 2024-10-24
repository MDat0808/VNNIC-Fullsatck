import TemplateNews from "../components/ui/template/TemplateNew";
import { useParams } from "react-router-dom";

export default function Event(params) {
  const { categorySlug } = useParams();
  console.log(categorySlug);

  return (
    <>
      <TemplateNews title={"Sự kiện"} />
    </>
  );
}
