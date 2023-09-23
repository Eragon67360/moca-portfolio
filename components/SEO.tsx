import Head from "next/head";

export default function SEO({
    title = 'UXMOCA Website',
    description = 'Our official Website.',
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
      </Head>
    </>
  );
}
