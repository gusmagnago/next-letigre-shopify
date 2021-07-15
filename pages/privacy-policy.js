import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";

function PrivacyPolicy() {
  const pageTitle = `PRIVACY POLICY | ${process.env.siteTitle}`;

  return (
    <div className=" h-full min-h-screen mx-auto mb-20">
      <SEO title={pageTitle} />
      <PageTitle text="PRIVACY POLICY" />
      <div className="w-10/12 px-2 mx-auto space-y-4">
        <div className="my-6">
          <h1 className="mb-4 text-xl font-bold">
            Collecting Personal Information
          </h1>
          <p className="mb-2 text-sm">
            When you visit <text className="font-semibold">Le Tigre Store</text>
            , we collect certain information about your device, your interaction
            with <text className="font-semibold">Le Tigre Store</text>, and
            information necessary to process your purchases. We may also collect
            additional information if you contact us for customer support. In
            this Privacy Policy, we refer to any information that can uniquely
            identify an individual (including the information below) as
            “Personal Information”.
            <br />
            See the list below for more information about what Personal
            Information we collect and why.
          </p>
          <h2 className="text-md font-semibold">Device information</h2>
          <p className="my-2">
            <ul>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Examples of Personal Information collected:
                </text>
                version of web browser, IP address, time zone, cookie
                information, what sites or products you view, search terms, and
                how you interact with
                <text className="font-semibold"> Le Tigre Store</text>.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Purpose of collection:
                </text>
                to load our site accurately for you, and to perform analytics on
                <text className="ml-1 font-semibold">Le Tigre Store</text> usage
                to optimize our site.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Source of collection:
                </text>
                collected automatically when you access our site using cookies,
                log files, web beacons, tags, or pixels.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Disclosure for a business purpose:
                </text>
                shared with our processor Shopify.
              </li>
            </ul>
          </p>
          <h2 className="text-md font-semibold">Order information</h2>
          <p className="my-2">
            <ul>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Examples of Personal Information collected:
                </text>
                name, billing address, shipping address, payment information
                (including credit card numbers, email address, and phone number.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Purpose of collection:
                </text>
                to provide products or services to you to fulfill our contract,
                to process your payment information, arrange for shipping, and
                provide you with invoices and/or order confirmations,
                communicate with you, screen our orders for potential risk or
                fraud, and when in line with the preferences you have shared
                with us, provide you with information or advertising relating to
                our products or services.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Source of collection:
                </text>
                collected from you.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Disclosure for a business purpose:
                </text>
                shared with our processor Shopify
              </li>
            </ul>
          </p>
          <h2 className="text-md font-semibold">
            Customer support information
          </h2>
          <p className="my-2">
            <ul>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Examples of Personal Information collected:
                </text>
                name, e-mail, payment method, payment information and order
                information.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Purpose of collection:
                </text>
                to provide customer support.
              </li>
              <li className="mb-1 ml-2 text-sm">
                <text className="text-md mr-1 font-semibold">
                  Source of collection:
                </text>
                collected from you.
              </li>
            </ul>
          </p>

          <h1 className="mb-4 text-lg font-bold">
            Sharing Personal Information
          </h1>
          <p className="mb-2 text-sm">
            We share your Personal Information with service providers to help us
            provide our services and fulfill our contracts with you, as
            described above.
            <br />
            For example:
          </p>
          <p>
            <ul>
              <li className="mb-1 ml-2 text-sm">
                We use Shopify to power our online store. You can read more
                about how Shopify uses your Personal Information here:
                <a
                  href="https://www.shopify.com/legal/privacy"
                  target="_blank"
                  className="text-md ml-1 font-semibold"
                >
                  Shopify Privacy.
                </a>
              </li>
              <li className="mb-1 ml-2 text-sm">
                We may share your Personal Information to comply with applicable
                laws and regulations, to respond to a subpoena, search warrant
                or other lawful request for information we receive, or to
                otherwise protect our rights.
              </li>
            </ul>
          </p>

          <h1 className="mb-4 text-lg font-bold">Behavioural Advertising</h1>
          <p className="mb-2 text-sm">
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you.
            <br />
            For example:
          </p>
          <ul>
            <li className="mb-1 ml-2 text-sm">
              We use Google Analytics to help us understand how our customers
              use <text className="font-semibold">Le Tigre Store</text>.
              <br />
              You can read more about how Google uses your Personal Information
              <a
                href="https://policies.google.com/privacy?hl=en"
                target="_blank"
                className="ml-1 font-semibold"
              >
                here
              </a>
              <br />
              You can also opt-out of Google Analytics
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                className="ml-1 font-semibold"
              >
                here
              </a>
              <br />
              <a
                href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                target="_blank"
                className="font-semibold"
              >
                networkadvertising.org
              </a>
            </li>

            <text className="mb-2 text-sm">
              You can opt out of targeted advertising by:
            </text>

            <li className="mb-1 ml-2 text-sm">
              <a
                href="https://www.facebook.com/settings/?tab=ads"
                target="_blank"
              >
                FACEBOOK
              </a>
            </li>
            <li className="mb-1 ml-2 text-sm">
              <a
                href="https://www.google.com/settings/ads/anonymous"
                target="_blank"
              >
                GOOGLE
              </a>
            </li>
            <text className="mb-2 text-sm">
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
            </text>
            <li className="mb-1 ml-2 text-sm">
              <a href="http://optout.aboutads.info/" target="_blank">
                OUPTOUT
              </a>
            </li>
          </ul>
        </div>
        <div className="my-6">
          <h1 className="mb-4 text-xl font-bold">Using Personal Information</h1>
          <p className="mb-2 text-sm">
            We use your personal Information to provide our services to you,
            which includes: offering products for sale, processing payments,
            shipping and fulfillment of your order, and keeping you up to date
            on new products, services, and offers.
          </p>
          <h1 className="text-lg font-bold">Lawful basis</h1>
          <p className="mb-2 text-sm">
            Pursuant to the General Data Protection Regulation (“GDPR”), if you
            are a resident of the European Economic Area (“EEA”), we process
            your personal information under the following lawful bases:
          </p>
          <p className="mb-2 text-sm">
            <ul>
              <li className="mb-1 ml-2 text-sm">Your consent;</li>
              <li className="mb-1 ml-2 text-sm">
                The performance of the contract between you and the us;
              </li>
              <li className="mb-1 ml-2 text-sm">
                Compliance with our legal obligations;
              </li>
              <li className="mb-1 ml-2 text-sm">
                To protect your vital interests;
              </li>
              <li className="mb-1 ml-2 text-sm">
                To perform a task carried out in the public interest;
              </li>
              <li className="mb-1 ml-2 text-sm">
                For our legitimate interests, which do not override your
                fundamental rights and freedoms.
              </li>
            </ul>
          </p>

          <h1 className="mb-4 text-lg font-bold">Retention</h1>
          <p className="mb-2 text-sm">
            When you place an order through{" "}
            <text className="font-semibold">Le Tigre Store</text>, we will
            retain your Personal Information for our records unless and until
            you ask us to erase this information. For more information on your
            right of erasure, please see the ‘Your rights’ section below.
          </p>

          <h1 className="text-lg font-bold">Automatic decision-making</h1>
          <p>
            If you are a resident of the EEA, you have the right to object to
            processing based solely on automated decision-making (which includes
            profiling), when that decision-making has a legal effect on you or
            otherwise significantly affects you. We [DO/DO NOT] engage in fully
            automated decision-making that has a legal or otherwise significant
            effect using customer data. Our processor Shopify uses limited
            automated decision-making to prevent fraud that does not have a
            legal or otherwise significant effect on you.
            <br />
            Services that include elements of automated decision-making include:
            <ul>
              <li>
                Temporary denylist of IP addresses associated with repeated
                failed transactions. This denylist persists for a small number
                of hours.
              </li>
              <li>
                Temporary denylist of credit cards associated with denylisted IP
                addresses. This denylist persists for a small number of days.
              </li>
            </ul>
          </p>
        </div>
        <div className="my-6">
          <h1 className="mb-4 text-xl font-bold">Your Rights</h1>
          <p className="mb-2 text-sm">
            If you are a resident of the EEA, you have the right to access the
            Personal Information we hold about you, to port it to a new service,
            and to ask that your Personal Information be corrected, updated, or
            erased. If you would like to exercise these rights, please contact
            us through the contact information below.
          </p>
          <p className="mb-2 text-sm">
            customercare@letigrestore.com. You can also to lodge a complaint
            with a
            <a
              href="https://ec.europa.eu/info/law/law-topic/data-protection_en"
              target="_blank"
            >
              Data Protection Authority.
            </a>
          </p>
          <p className="mb-2 text-sm">
            Your Personal Information will be initially processed in Ireland and
            then will be transferred outside of Europe for storage and further
            processing, including to Canada and the United States. For more
            information on how data transfers comply with the GDPR, see
            Shopify’s GDPR Whitepaper:
            https://help.shopify.com/en/manual/your-account/privacy/GDPR.
          </p>
        </div>
        <div className="my-6">
          <h1 className="mb-4 text-xl font-bold">Cookies</h1>
          <p className="mb-2 text-sm">
            A cookie is a small amount of information that’s downloaded to your
            computer or device when you visit our site. We use a number of
            different cookies, including functional, performance, advertising,
            and social media or content cookies. Cookies make your browsing
            experience better by allowing the website to remember your actions
            and preferences (such as login and region selection). This means you
            don’t have to re-enter this information each time you return to the
            site or browse from one page to another. Cookies also provide
            information on how people use the website, for instance whether it’s
            their first time visiting or if they are a frequent visitor.
            <br />
            <br />
            You can control and manage cookies in various ways. Please keep in
            mind that removing or blocking cookies can negatively impact your
            user experience and parts of our website may no longer be fully
            accessible.
            <br />
            <br />
            Most browsers automatically accept cookies, but you can choose
            whether or not to accept cookies through your browser controls,
            often found in your browser’s “Tools” or “Preferences” menu. For
            more information on how to modify your browser settings or how to
            block, manage or filter cookies can be found in your browser’s help
            file or through such sites as www.allaboutcookies.org.
            <br />
            <br />
            Additionally, please note that blocking cookies may not completely
            prevent how we share information with third parties such as our
            advertising partners. To exercise your rights or opt-out of certain
            uses of your information by these parties, please follow the
            instructions in the “Behavioral Advertising” section above.
          </p>
          <h1 className="text-lg font-bold">Do Not Track</h1>
          <p className="mb-2 text-sm">
            Please note that because there is no consistent industry
            understanding of how to respond to “Do Not Track” signals, we do not
            alter our data collection and usage practices when we detect such a
            signal from your browser.
          </p>
        </div>
        <div div className="my-6">
          <h1 className="text-lg font-bold">Changes</h1>
          <p className="mb-2 text-sm">
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons.
          </p>
        </div>
        <div div className="my-6">
          <h1 className="text-lg font-bold">Contact</h1>
          <p className="mb-2 text-sm">
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at
            <text text className="ml-1 font-semibold">
              customercare@letigrestore.com
            </text>
            <br />
          </p>
        </div>
        <p className="mt-4 font-semibold">Last updated: 02/07/2021</p>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
