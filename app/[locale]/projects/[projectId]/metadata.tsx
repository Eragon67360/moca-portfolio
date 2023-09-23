import { Metadata } from "next";

type Props = {
  params: { projectId: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Project - ${params.projectId}`,
  };
};

const ProductDetails = () => {
  return <></>;
};

export default ProductDetails;
