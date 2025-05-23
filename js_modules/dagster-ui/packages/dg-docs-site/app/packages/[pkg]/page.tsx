import PackagePageWithLink from '@/app/packages/[pkg]/PackagePageWithLink';
import getContents, {getPackage} from '@/util/getContents';

interface Props {
  params: Promise<{pkg: string}>;
}

export default async function Page({params}: Props) {
  const {pkg} = await params;
  const contents = await getContents();
  if (!contents) {
    return <div>Contents not found</div>;
  }

  const pkgConfig = await getPackage(contents, pkg);

  if (!pkgConfig) {
    return <div>Package not found</div>;
  }

  return <PackagePageWithLink pkgConfig={pkgConfig} />;
}

export async function generateStaticParams() {
  const contents = await getContents();
  if (!contents) {
    return [];
  }
  return contents.map((pkg) => ({pkg: pkg.name}));
}
