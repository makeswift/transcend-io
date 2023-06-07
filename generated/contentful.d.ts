// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
import { Document } from '@contentful/rich-text-types'
import { Asset, Entry } from 'contentful'

export interface IIntegrationFields {
  /** Title */
  title?: string | undefined

  /** Description */
  description?: string | undefined

  /** integrationName */
  integrationName: string

  /** aliasIntegration */
  aliasIntegration?: IIntegration | undefined

  /** Vendor */
  vendor?: IVendor | undefined

  /** Logo */
  logo?: Asset | undefined

  /** Logo Square */
  logoSquare?: Asset | undefined

  /** Saas Categories */
  saaSCategories: ISaaSCategory[]

  /** Website */
  website?: string | undefined

  /** Data Actions */
  marketingDescription?: Document | undefined

  /** Data Category Tag Examples */
  dataCategoryTagExamples?: string | undefined

  /** Full Documentation */
  fullDocumentation?: string | undefined

  /** Controller Manual Instructions */
  controllerManualInstructions?: Document | undefined

  /** Subject Manual Instructions */
  subjectManualInstructions?: Document | undefined

  /** Business User Overview */
  businessUserOverview?: Document | undefined

  /** Identity Enrichment Recommended? */
  identityEnrichmentRecommended?: boolean | undefined

  /** Connection Instructions */
  introMessage?: Document | undefined

  /** Integration Status */
  integrationStatus?: 'BETA' | 'ONLINE' | undefined

  /** promptAVendorEmailAddress */
  promptAVendorEmailAddress?: string | undefined

  /** AVC Email Verified? */
  avcEmailVerified?: boolean | undefined

  /** emailRequestOptions */
  emailRequestOptions?:
    | (
        | 'ACCESS'
        | 'ERASURE'
        | 'CONTACT_OPT_OUT'
        | 'SALE_OPT_OUT'
        | 'TRACKING_OPT_OUT'
        | 'AUTOMATED_DECISION_MAKING_OPT_OUT'
        | 'RESTRICTION'
        | 'RECTIFICATION'
      )[]
    | undefined

  /** See Other Integrations */
  seeOtherIntegrations?: string[] | undefined

  /** Data points */
  dataPoints?: Record<string, any> | undefined

  /** Example Data */
  exampleData?: Record<string, any> | undefined

  /** Has Personal Data? */
  hasPersonalData?: 'YES' | 'NO' | 'LIKELY' | 'UNLIKELY' | undefined

  /** Recommended for Privacy Requests? */
  recommendedForPrivacy?: 'POSSIBLE' | 'LIKELY' | 'VERY_LIKELY' | 'NOT_RECOMMENDED' | undefined

  /** Recommended for Consent? */
  recommendedForConsent?:
    | 'POSSIBLE'
    | 'VERY_LIKELY'
    | 'PENDING_REGULATION'
    | 'NOT_RECOMMENDED'
    | undefined

  /** Data Retention Note */
  dataRetentionNote?: string | undefined

  /** Data subject types */
  dataSubjectTypes?: ('END_USER' | 'EMPLOYEE' | 'BUSINESS_CONTACT')[] | undefined

  /** Data Processing Agreement */
  dataProcessingAgreement?: string | undefined

  /** Privacy email */
  privacyEmail?: string | undefined

  /** heroImage */
  heroImage?: Asset | undefined

  /** isFeatured */
  isFeatured?: boolean | undefined

  /** heroBackgroundColor */
  heroBackgroundColor?: string | undefined

  /** Disqualification Reasons */
  disqualificationReasons?:
    | (
        | 'broken down into sub-products'
        | 'built on data from another product'
        | 'forwards PII but does not store it'
        | 'goes by another name'
        | 'may contain unstructured PII if used in a weird way [premium]'
        | 'only uses anonymized data'
        | 'tool has short data retention period for PII'
        | 'tool is a visualization on top of a database'
        | 'tool is not expected to hold PII for data subjects'
      )[]
    | undefined

  /** Consent Config */
  consentConfig?: Record<string, any> | undefined

  /** TCF Vendor ID */
  tcfVendorId?: ITcfVendor | undefined

  /** Consent DoNotSell Integration? */
  consentDoNotSellIntegration?: boolean | undefined

  /** Has USP API Support */
  hasUspApiSupport?: boolean | undefined
}

/** Integration contents to be managed by marketing, including "title", "description", and logo. */

export interface IIntegration extends Entry<IIntegrationFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'integration'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ISaaSCategoryFields {
  /** Title */
  title?: string | undefined
}

/** The categories that span the space of SaaS integrations.  Originally from SaaSy. */

export interface ISaaSCategory extends Entry<ISaaSCategoryFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'saaSCategory'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ITcfVendorFields {
  /** id */
  id: string

  /** name */
  name: string

  /** purposes */
  purposes?: string[] | undefined

  /** legIntPurposes */
  legIntPurposes?: string[] | undefined

  /** flexiblePurposes */
  flexiblePurposes?: string[] | undefined

  /** specialPurposes */
  specialPurposes?: string[] | undefined

  /** features */
  features?: string[] | undefined

  /** specialFeatures */
  specialFeatures?: string[] | undefined

  /** policyUrl */
  policyUrl?: string | undefined

  /** cookieMaxAgeSeconds */
  cookieMaxAgeSeconds?: number | undefined

  /** usesCookies */
  usesCookies: boolean

  /** cookieRefresh */
  cookieRefresh?: boolean | undefined

  /** usesNonCookieAccess */
  usesNonCookieAccess?: boolean | undefined

  /** deviceStorageDisclosureUrl */
  deviceStorageDisclosureUrl?: string | undefined

  /** vendorListVersion */
  vendorListVersion?: number | undefined
}

/** Official and custom TCF vendors */

export interface ITcfVendor extends Entry<ITcfVendorFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'tcfVendor'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IVendorFields {
  /** Title */
  title: string

  /** Description */
  description?: string | undefined

  /** Privacy Policy URL */
  privacyPolicyUrl?: string | undefined

  /** Headquarters Region */
  headquartersRegion?: string | undefined

  /** Logo */
  logo?: Asset | undefined

  /** Logo Square */
  logoSquare?: Asset | undefined

  /** Primary Contact */
  primaryContact?: string | undefined

  /** Privacy Contact */
  privacyContact?: string | undefined

  /** TCF Vendor ID */
  tcfVendorId?: number | undefined
}

/** Third party vendors have a set of catalogs. */

export interface IVendor extends Entry<IVendorFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'vendor'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'integration' | 'saaSCategory' | 'tcfVendor' | 'vendor'

export type IEntry = IIntegration | ISaaSCategory | ITcfVendor | IVendor

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'