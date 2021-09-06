import Layout from '../components/Layout';
import CitationManager, { CitationComponents } from '../components/CitationManager';

export interface ArticleLayoutProps {
  children: (c: CitationComponents) => React.ReactChild
}

const ArticleLayout = (props:ArticleLayoutProps) => <Layout>
  <div className="container mt-5">
    <CitationManager prefix="source-">{
      c => props.children(c)
    }</CitationManager>
  </div>
</Layout>

export default ArticleLayout
