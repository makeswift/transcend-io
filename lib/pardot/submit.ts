interface ExpectedContactFormBody {
  /** The submitter's first name */
  firstName?: string
  /** The submitter's last name */
  lastName?: string
  /** The submitter's work email */
  email: string
  /** The submitter's job title */
  title?: string
  /** The submitter's company name */
  company?: string
  /** The submitter's phone number */
  phone?: string
  /** The submitter's country of residence */
  country?: string
  /** The submitter's state of residence */
  state?: string
  /** Any text that the submitter sent with this submission */
  message?: string
  /** If this is a partner submitting a referral */
  // referralPartner?: PartnerFormFields
  /**
   * The submitter's consent to be contacted. If the user is requesting a demo (i.e. be contacted), this is `true` as implied consent.
   * This is only `false` when we're using this form for another purpose on the marketing website, such as to send swag / unlock content downloads.
   * In such a case, we can also request consent for marketing in that contact form.
   * This is not really relevant to usage in `main` and should generally be `true`.
   */
  consent: boolean | string
  /** The reCAPTCHA token (only for use on our marketing website) */
  recaptchaToken?: string
  /** This is set up by the marketing team in Salesforce Pardot to label which contact form is being used */
  pardotCampaignId: number | string
  /**
   * Comma and space-separated string, e.g.: `9123, 1231`
   * This is set up by the marketing team in Salesforce Pardot to label which mailing lists the user should be added to
   */
  pardotListIds: string
  /**
   * Pardot visitor ID
   */
  pardotVisitorId?: string
  /**
   * The user's existing anonymousId from Segment
   */
  anonymousId?: string
  /** Which channel this traffic is coming from. In `main` this'll likely always be "Admin Dashboard" */
  utm_source?: string
  /** What type of channel this traffic is coming from. */
  utm_medium?: string
  /** Which marketing campaign this is coming from. */
  utm_campaign?: string
  /** A unique ID */
  utm_id?: string
  /** Only relevant for search campaigns (e.g. what google search term they came from) */
  utm_term?: string
  /** Only relevant for content-based campaigns (e.g. what blog post they were on) */
  utm_content?: string
}

export async function submitLead(body: ExpectedContactFormBody) {
  return fetch('https://docs.transcend.io/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(r => r.json())
    .then(console.log)
}
