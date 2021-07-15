import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import Instagram from "@/components/Instagram";

function About() {
  const pageTitle = `About | ${process.env.siteTitle}`;

  return (
    <div className=" h-full mx-auto mb-20">
      <SEO title={pageTitle} />
      <PageTitle text="OUR STORY" />
      <div className="justify-evenly flex flex-col w-10/12 min-h-screen px-2 mx-auto text-center">
        <p>
          We don't have any story to tell yet, but hopefully you will now
          everything about us soon
        </p>
        <Instagram />
      </div>
    </div>
  );
}
export default About;
