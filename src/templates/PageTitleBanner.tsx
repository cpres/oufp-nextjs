type IPageTitleBannerProps = {
  title: string;
  description: string;
};

const PageTitleBanner = (props: IPageTitleBannerProps) => (
  <div className="mb-12 rounded-lg bg-pea-500 px-6 py-8 text-center">
    <h2 className="text-4xl font-bold text-pea-900">{props.title}</h2>
    <p className="mt-4 text-xl text-pea-700">{props.description}</p>
  </div>
);

export { PageTitleBanner };
