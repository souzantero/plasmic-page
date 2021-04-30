/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "pricing": {name: "Pricing", projectId: "dCCsYeSMxr5mko2nE1Sdbx" },
  
    "features": {name: "Features", projectId: "dCCsYeSMxr5mko2nE1Sdbx" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["pricing",] } },
      
        { params: { plasmicLoaderPage: ["features",] } },
      
    ],
    fallback: false,
  };
}
