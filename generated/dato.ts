import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FloatType: { input: any; output: any; }
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

/** Block of type Action Card (action_card) */
export type ActionCardRecord = RecordInterface & {
  __typename?: 'ActionCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};


/** Block of type Action Card (action_card) */
export type ActionCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Anchor (anchor) */
export type AnchorRecord = RecordInterface & {
  __typename?: 'AnchorRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Anchor (anchor) */
export type AnchorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type AuthorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  avatar?: InputMaybe<FileFilter>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  featured?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum AuthorModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type author (author) */
export type AuthorRecord = RecordInterface & {
  __typename?: 'AuthorRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  avatar: FileField;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  featured?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  social: Array<TextBlockRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type author (author) */
export type AuthorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Badges Block (badges_block) */
export type BadgesBlockRecord = RecordInterface & {
  __typename?: 'BadgesBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  badges: Array<FileField>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Badges Block (badges_block) */
export type BadgesBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Badges Block (badges_block) */
export type BadgesBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Blog Cards Grid (blog_cards_grid) */
export type BlogCardsGridRecord = RecordInterface & {
  __typename?: 'BlogCardsGridRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cards: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  featured: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Blog Cards Grid (blog_cards_grid) */
export type BlogCardsGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type ButtonModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  arrow?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
  withBackground?: InputMaybe<BooleanFilter>;
};

export enum ButtonModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  ArrowAsc = 'arrow_ASC',
  ArrowDesc = 'arrow_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WithBackgroundAsc = 'withBackground_ASC',
  WithBackgroundDesc = 'withBackground_DESC'
}

/** Record of type button (button) */
export type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  arrow?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  withBackground?: Maybe<Scalars['BooleanType']['output']>;
};


/** Record of type button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type buttons array (buttons_array) */
export type ButtonsArrayRecord = RecordInterface & {
  __typename?: 'ButtonsArrayRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  button: Array<ButtonRecord>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type buttons array (buttons_array) */
export type ButtonsArrayRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CalloutboxModelContentField = {
  __typename?: 'CalloutboxModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type CalloutboxModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CalloutboxModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CalloutboxModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  withShadow?: InputMaybe<BooleanFilter>;
};

export enum CalloutboxModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WithShadowAsc = 'withShadow_ASC',
  WithShadowDesc = 'withShadow_DESC'
}

/** Record of type calloutbox (calloutbox) */
export type CalloutboxRecord = RecordInterface & {
  __typename?: 'CalloutboxRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<CalloutboxModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  withShadow?: Maybe<Scalars['BooleanType']['output']>;
};


/** Record of type calloutbox (calloutbox) */
export type CalloutboxRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CardModelCardsField = ActionCardRecord | InformationCardRecord | QuoteCardRecord | SourceCardRecord | VideoPopupCardRecord;

export type CardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CardModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type card (card) */
export type CardRecord = RecordInterface & {
  __typename?: 'CardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cards: Array<CardModelCardsField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type card (card) */
export type CardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Cards Array Content Block (cards_array_content_block) */
export type CardsArrayContentBlockRecord = RecordInterface & {
  __typename?: 'CardsArrayContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  animation?: Maybe<FileField>;
  cards: Array<CardRecord>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  mobileCustomerLogos: Array<FileField>;
  preTitle?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Cards Array Content Block (cards_array_content_block) */
export type CardsArrayContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CaseStudyBlockModelContentField = CaseStudyContentRecord | CaseStudyQuoteRecord;

/** Block of type Case Study Block (case_study_block) */
export type CaseStudyBlockRecord = RecordInterface & {
  __typename?: 'CaseStudyBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  caseStudyInfo: Array<CaseStudyInfoCardRecord>;
  content: Array<CaseStudyBlockModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Case Study Block (case_study_block) */
export type CaseStudyBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CaseStudyCardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseStudyCardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseStudyCardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  backgroundImage?: InputMaybe<FileFilter>;
  cardColor?: InputMaybe<ColorFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  path?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CaseStudyCardModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PathAsc = 'path_ASC',
  PathDesc = 'path_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type case study card (case_study_card) */
export type CaseStudyCardRecord = RecordInterface & {
  __typename?: 'CaseStudyCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  backgroundImage?: Maybe<FileField>;
  cardColor?: Maybe<ColorField>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type case study card (case_study_card) */
export type CaseStudyCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type case study card (case_study_card) */
export type CaseStudyCardRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Case Study Content (case_study_content) */
export type CaseStudyContentRecord = RecordInterface & {
  __typename?: 'CaseStudyContentRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Case Study Content (case_study_content) */
export type CaseStudyContentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Case Study Content (case_study_content) */
export type CaseStudyContentRecordBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Case Study Info Card (case_study_info_card) */
export type CaseStudyInfoCardRecord = RecordInterface & {
  __typename?: 'CaseStudyInfoCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Case Study Info Card (case_study_info_card) */
export type CaseStudyInfoCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Case Study Quote (case_study_quote) */
export type CaseStudyQuoteRecord = RecordInterface & {
  __typename?: 'CaseStudyQuoteRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<FileField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  quote?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Case Study Quote (case_study_quote) */
export type CaseStudyQuoteRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Case Study Quote (case_study_quote) */
export type CaseStudyQuoteRecordQuoteArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Case Study Related (case_study_related) */
export type CaseStudyRelatedRecord = RecordInterface & {
  __typename?: 'CaseStudyRelatedRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  relatedCaseStudies: Array<CaseStudyCardRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Case Study Related (case_study_related) */
export type CaseStudyRelatedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  isresetbutton?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  subheading?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CategoryModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsresetbuttonAsc = 'isresetbutton_ASC',
  IsresetbuttonDesc = 'isresetbutton_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PathAsc = 'path_ASC',
  PathDesc = 'path_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type category (category) */
export type CategoryRecord = RecordInterface & {
  __typename?: 'CategoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  isresetbutton?: Maybe<Scalars['BooleanType']['output']>;
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  subheading?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type category (category) */
export type CategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Code Block (code_block) */
export type CodeBlockRecord = RecordInterface & {
  __typename?: 'CodeBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bodyHtml?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  scriptBody?: Maybe<Scalars['String']['output']>;
  scriptHead?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Code Block (code_block) */
export type CodeBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Code Block (code_block) */
export type CodeBlockRecordBodyHtmlArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Code Block (code_block) */
export type CodeBlockRecordScriptBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Code Block (code_block) */
export type CodeBlockRecordScriptHeadArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Code Content Block (code_content_block) */
export type CodeContentBlockRecord = RecordInterface & {
  __typename?: 'CodeContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  codeSnippetBlocks: Array<CodeSnippetRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  pretitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Code Content Block (code_content_block) */
export type CodeContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Code Content Block (code_content_block) */
export type CodeContentBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CodeSnippetModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CodeSnippetModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CodeSnippetModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  code?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  snippetDescription?: InputMaybe<TextFilter>;
  snippetLabel?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CodeSnippetModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SnippetLabelAsc = 'snippetLabel_ASC',
  SnippetLabelDesc = 'snippetLabel_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type code snippet (code_snippet) */
export type CodeSnippetRecord = RecordInterface & {
  __typename?: 'CodeSnippetRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  snippetDescription?: Maybe<Scalars['String']['output']>;
  snippetLabel: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type code snippet (code_snippet) */
export type CodeSnippetRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type code snippet (code_snippet) */
export type CodeSnippetRecordCodeArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type code snippet (code_snippet) */
export type CodeSnippetRecordSnippetDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Specifies how to filter Color fields */
export type ColorFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type column (column) */
export type ColumnRecord = RecordInterface & {
  __typename?: 'ColumnRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<LinkRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type column (column) */
export type ColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Contact Content Block (contact_content_block) */
export type ContactContentBlockRecord = RecordInterface & {
  __typename?: 'ContactContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  calendlyBranding?: Maybe<Scalars['BooleanType']['output']>;
  calendlyPopupText?: Maybe<Scalars['String']['output']>;
  calendlyUrl?: Maybe<Scalars['String']['output']>;
  calendlyWidgetColor?: Maybe<ColorField>;
  calendlyWidgetText?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enablePopupText?: Maybe<Scalars['BooleanType']['output']>;
  enablePopupWidget?: Maybe<Scalars['BooleanType']['output']>;
  form: FormLargeRecord;
  id: Scalars['ItemId']['output'];
  logoWall: Array<FileField>;
  logoWallCaption?: Maybe<Scalars['String']['output']>;
  singleTitleWordColor?: Maybe<ColorField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Contact Content Block (contact_content_block) */
export type ContactContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Contact Content Block (contact_content_block) */
export type ContactContentBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Contact Content Block (contact_content_block) */
export type ContactContentBlockRecordTitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Contact Form (contact_form) */
export type ContactFormRecord = RecordInterface & {
  __typename?: 'ContactFormRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  autofocus?: Maybe<Scalars['BooleanType']['output']>;
  buttonSuccessMessage: Scalars['String']['output'];
  company: Scalars['String']['output'];
  consentDisclosure?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  disclosures?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gatherConsent?: Maybe<Scalars['BooleanType']['output']>;
  hasSideContent?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  isPardot?: Maybe<Scalars['BooleanType']['output']>;
  lastName: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  pardotCampaignId: Scalars['IntType']['output'];
  pardotFormAction?: Maybe<Scalars['String']['output']>;
  pardotListIds?: Maybe<Scalars['String']['output']>;
  performsRedirect?: Maybe<Scalars['BooleanType']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  redirectPath?: Maybe<Scalars['String']['output']>;
  sideContent?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Contact Form (contact_form) */
export type ContactFormRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Contact Form (contact_form) */
export type ContactFormRecordConsentDisclosureArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Contact Form (contact_form) */
export type ContactFormRecordDisclosuresArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Contact Form (contact_form) */
export type ContactFormRecordSideContentArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Content Heading (content_heading) */
export type ContentHeadingRecord = RecordInterface & {
  __typename?: 'ContentHeadingRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  as: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  elementId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Content Heading (content_heading) */
export type ContentHeadingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type Drop Down Links Column (drop_down_links_column) */
export type DropDownLinksColumnRecord = RecordInterface & {
  __typename?: 'DropDownLinksColumnRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  columns: Array<ThreeColumnRecord>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Drop Down Links Column (drop_down_links_column) */
export type DropDownLinksColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type DropDownColumn (dropdowncolumn) */
export type DropdowncolumnRecord = RecordInterface & {
  __typename?: 'DropdowncolumnRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  columnLinks: Array<LinksColumnRecord>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkTitle: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type DropDownColumn (dropdowncolumn) */
export type DropdowncolumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type FAQ Content Block (faq_content_block) */
export type FaqContentBlockRecord = RecordInterface & {
  __typename?: 'FaqContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  questions: Array<QuestionRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type FAQ Content Block (faq_content_block) */
export type FaqContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type FAQ Content Block (faq_content_block) */
export type FaqContentBlockRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

/** Block of type Featured Terms Block (featured_terms_block) */
export type FeaturedTermsBlockRecord = RecordInterface & {
  __typename?: 'FeaturedTermsBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  terms: Array<TermRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Featured Terms Block (featured_terms_block) */
export type FeaturedTermsBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Features Grid (features_grid) */
export type FeaturesGridRecord = RecordInterface & {
  __typename?: 'FeaturesGridRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  features: Array<ProductFeatureRecord>;
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Features Grid (features_grid) */
export type FeaturesGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter Floating-point fields */
export type FloatFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['FloatType']['input']>;
};

export type FooterModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  additionalLinks?: InputMaybe<LinksFilter>;
  address?: InputMaybe<StringFilter>;
  copyright?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  socialLinks?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum FooterModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  additionalLinks: Array<LinkRecord>;
  address?: Maybe<Scalars['String']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  footerForm: Array<FormContentBlockRecord>;
  id: Scalars['ItemId']['output'];
  linkColumns: Array<ColumnRecord>;
  logo?: Maybe<FileField>;
  socialLinks: Array<ButtonRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Form Content Block (form_content_block) */
export type FormContentBlockRecord = RecordInterface & {
  __typename?: 'FormContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  backgroundColor?: Maybe<ColorField>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  form?: Maybe<FormEmailRecord>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  isCentered?: Maybe<Scalars['BooleanType']['output']>;
  isFormRight?: Maybe<Scalars['BooleanType']['output']>;
  isWhiteTextColor?: Maybe<Scalars['BooleanType']['output']>;
  preTitle?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Form Content Block (form_content_block) */
export type FormContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Form Content Block (form_content_block) */
export type FormContentBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Form Content Block (form_content_block) */
export type FormContentBlockRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormEmailModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormEmailModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormEmailModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  consent?: InputMaybe<TextFilter>;
  consentDisclosure?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  cta?: InputMaybe<LinkFilter>;
  ctaSuccessMessage?: InputMaybe<StringFilter>;
  emailPlaceholder?: InputMaybe<StringFilter>;
  errorText?: InputMaybe<StringFilter>;
  formTitle?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  impliesConsent?: InputMaybe<BooleanFilter>;
  isAlignLeft?: InputMaybe<BooleanFilter>;
  pardotCampaignId?: InputMaybe<IntegerFilter>;
  pardotListIds?: InputMaybe<StringFilter>;
  performsRedirect?: InputMaybe<BooleanFilter>;
  subtitle?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum FormEmailModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CtaSuccessMessageAsc = 'ctaSuccessMessage_ASC',
  CtaSuccessMessageDesc = 'ctaSuccessMessage_DESC',
  EmailPlaceholderAsc = 'emailPlaceholder_ASC',
  EmailPlaceholderDesc = 'emailPlaceholder_DESC',
  ErrorTextAsc = 'errorText_ASC',
  ErrorTextDesc = 'errorText_DESC',
  FormTitleAsc = 'formTitle_ASC',
  FormTitleDesc = 'formTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImpliesConsentAsc = 'impliesConsent_ASC',
  ImpliesConsentDesc = 'impliesConsent_DESC',
  IsAlignLeftAsc = 'isAlignLeft_ASC',
  IsAlignLeftDesc = 'isAlignLeft_DESC',
  PardotCampaignIdAsc = 'pardotCampaignId_ASC',
  PardotCampaignIdDesc = 'pardotCampaignId_DESC',
  PardotListIdsAsc = 'pardotListIds_ASC',
  PardotListIdsDesc = 'pardotListIds_DESC',
  PerformsRedirectAsc = 'performsRedirect_ASC',
  PerformsRedirectDesc = 'performsRedirect_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type form_email (form_email) */
export type FormEmailRecord = RecordInterface & {
  __typename?: 'FormEmailRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  consent?: Maybe<Scalars['String']['output']>;
  consentDisclosure?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  ctaSuccessMessage?: Maybe<Scalars['String']['output']>;
  emailPlaceholder?: Maybe<Scalars['String']['output']>;
  errorText?: Maybe<Scalars['String']['output']>;
  formTitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  impliesConsent?: Maybe<Scalars['BooleanType']['output']>;
  isAlignLeft?: Maybe<Scalars['BooleanType']['output']>;
  pardotCampaignId: Scalars['IntType']['output'];
  pardotListIds?: Maybe<Scalars['String']['output']>;
  performsRedirect?: Maybe<Scalars['BooleanType']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type form_email (form_email) */
export type FormEmailRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type form_email (form_email) */
export type FormEmailRecordConsentArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type form_email (form_email) */
export type FormEmailRecordConsentDisclosureArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type form_email (form_email) */
export type FormEmailRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormLargeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormLargeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormLargeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  allowPersonalEmail?: InputMaybe<BooleanFilter>;
  buttonSuccessMessage?: InputMaybe<StringFilter>;
  company?: InputMaybe<StringFilter>;
  companySize?: InputMaybe<StringFilter>;
  consentDisclosure?: InputMaybe<TextFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  cta?: InputMaybe<LinkFilter>;
  disclosures?: InputMaybe<TextFilter>;
  email?: InputMaybe<StringFilter>;
  errorText?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  formTitle?: InputMaybe<StringFilter>;
  gatherConsent?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  isPardot?: InputMaybe<BooleanFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  pardotCampaignId?: InputMaybe<IntegerFilter>;
  pardotFormAction?: InputMaybe<StringFilter>;
  pardotListIds?: InputMaybe<StringFilter>;
  performsRedirect?: InputMaybe<BooleanFilter>;
  phone?: InputMaybe<StringFilter>;
  redirectPath?: InputMaybe<StringFilter>;
  requiredFields?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum FormLargeModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  AllowPersonalEmailAsc = 'allowPersonalEmail_ASC',
  AllowPersonalEmailDesc = 'allowPersonalEmail_DESC',
  ButtonSuccessMessageAsc = 'buttonSuccessMessage_ASC',
  ButtonSuccessMessageDesc = 'buttonSuccessMessage_DESC',
  CompanySizeAsc = 'companySize_ASC',
  CompanySizeDesc = 'companySize_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ErrorTextAsc = 'errorText_ASC',
  ErrorTextDesc = 'errorText_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  FormTitleAsc = 'formTitle_ASC',
  FormTitleDesc = 'formTitle_DESC',
  GatherConsentAsc = 'gatherConsent_ASC',
  GatherConsentDesc = 'gatherConsent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPardotAsc = 'isPardot_ASC',
  IsPardotDesc = 'isPardot_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  PardotCampaignIdAsc = 'pardotCampaignId_ASC',
  PardotCampaignIdDesc = 'pardotCampaignId_DESC',
  PardotFormActionAsc = 'pardotFormAction_ASC',
  PardotFormActionDesc = 'pardotFormAction_DESC',
  PardotListIdsAsc = 'pardotListIds_ASC',
  PardotListIdsDesc = 'pardotListIds_DESC',
  PerformsRedirectAsc = 'performsRedirect_ASC',
  PerformsRedirectDesc = 'performsRedirect_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  RedirectPathAsc = 'redirectPath_ASC',
  RedirectPathDesc = 'redirectPath_DESC',
  RequiredFieldsAsc = 'requiredFields_ASC',
  RequiredFieldsDesc = 'requiredFields_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type form_large (form_large) */
export type FormLargeRecord = RecordInterface & {
  __typename?: 'FormLargeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  allowPersonalEmail?: Maybe<Scalars['BooleanType']['output']>;
  buttonSuccessMessage: Scalars['String']['output'];
  company?: Maybe<Scalars['String']['output']>;
  companySize?: Maybe<Scalars['String']['output']>;
  consentDisclosure?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  disclosures?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  errorText?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  formTitle?: Maybe<Scalars['String']['output']>;
  gatherConsent?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  isPardot?: Maybe<Scalars['BooleanType']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pardotCampaignId: Scalars['IntType']['output'];
  pardotFormAction?: Maybe<Scalars['String']['output']>;
  pardotListIds?: Maybe<Scalars['String']['output']>;
  performsRedirect?: Maybe<Scalars['BooleanType']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  redirectPath?: Maybe<Scalars['String']['output']>;
  requiredFields?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type form_large (form_large) */
export type FormLargeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type form_large (form_large) */
export type FormLargeRecordConsentDisclosureArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type form_large (form_large) */
export type FormLargeRecordDisclosuresArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Full Law (full_law_content_block) */
export type FullLawContentBlockRecord = RecordInterface & {
  __typename?: 'FullLawContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  fullLaw: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Full Law (full_law_content_block) */
export type FullLawContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Full Law (full_law_content_block) */
export type FullLawContentBlockRecordFullLawArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Block of type General Content Block (general_content_block) */
export type GeneralContentBlockRecord = RecordInterface & {
  __typename?: 'GeneralContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  generalContent?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  isCentered?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type General Content Block (general_content_block) */
export type GeneralContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type General Content Block (general_content_block) */
export type GeneralContentBlockRecordGeneralContentArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Get Started (get_started) */
export type GetStartedRecord = RecordInterface & {
  __typename?: 'GetStartedRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Get Started (get_started) */
export type GetStartedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Block of type Glossary Block (glossary_block) */
export type GlossaryBlockRecord = RecordInterface & {
  __typename?: 'GlossaryBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredTerms: Array<TermRecord>;
  heroDescription?: Maybe<Scalars['String']['output']>;
  heroTextColor?: Maybe<Scalars['String']['output']>;
  heroTitle?: Maybe<Scalars['String']['output']>;
  heroTitleHighlight?: Maybe<ColorField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  searchButtonText?: Maybe<Scalars['String']['output']>;
  searchPlaceholder?: Maybe<Scalars['String']['output']>;
  terms: Array<TermRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Glossary Block (glossary_block) */
export type GlossaryBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Glossary Block (glossary_block) */
export type GlossaryBlockRecordHeroDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderModelDropdownLinksField = ButtonsArrayRecord | DropdowncolumnRecord | LinksArrayRecord | SingleLinkRecord;

export type HeaderModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  announcement?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum HeaderModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type header (header) */
export type HeaderRecord = RecordInterface & {
  __typename?: 'HeaderRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  announcement?: Maybe<ButtonRecord>;
  createdAt: Scalars['DateTime']['output'];
  dropdownLinks: Array<HeaderModelDropdownLinksField>;
  id: Scalars['ItemId']['output'];
  logo: FileField;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type header (header) */
export type HeaderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Hero-New Style (hero_new_style) */
export type HeroNewStyleRecord = RecordInterface & {
  __typename?: 'HeroNewStyleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttons: Array<ButtonRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fixedLogos: Array<FileField>;
  form?: Maybe<FormEmailRecord>;
  hasButtons?: Maybe<Scalars['BooleanType']['output']>;
  hasFixedLogos?: Maybe<Scalars['BooleanType']['output']>;
  hasLogoWall?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  isCentered?: Maybe<Scalars['BooleanType']['output']>;
  isForm?: Maybe<Scalars['BooleanType']['output']>;
  isImageFullWidth?: Maybe<Scalars['BooleanType']['output']>;
  isImageWithBackground?: Maybe<Scalars['BooleanType']['output']>;
  logoWall: Array<FileField>;
  logoWallCaption?: Maybe<Scalars['String']['output']>;
  marginBottom?: Maybe<Scalars['IntType']['output']>;
  mobileImage?: Maybe<FileField>;
  singleTitleWordColor?: Maybe<ColorField>;
  textColor?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  width?: Maybe<Scalars['IntType']['output']>;
};


/** Block of type Hero-New Style (hero_new_style) */
export type HeroNewStyleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Hero-New Style (hero_new_style) */
export type HeroNewStyleRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Hero-New Style (hero_new_style) */
export type HeroNewStyleRecordTitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Hero (hero) */
export type HeroRecord = RecordInterface & {
  __typename?: 'HeroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  animation?: Maybe<FileField>;
  background?: Maybe<FileField>;
  backgroundColor?: Maybe<ColorField>;
  backgroundPosition?: Maybe<Scalars['String']['output']>;
  backgroundPositionMobile?: Maybe<Scalars['String']['output']>;
  backgroundSize?: Maybe<Scalars['String']['output']>;
  backgroundSizeMobile?: Maybe<Scalars['String']['output']>;
  callToAction?: Maybe<ButtonRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  form?: Maybe<FormEmailRecord>;
  hasLogoWall?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  imageCoordinates?: Maybe<Scalars['String']['output']>;
  imagePosition?: Maybe<Scalars['String']['output']>;
  imageSize?: Maybe<Scalars['String']['output']>;
  isCallToAction?: Maybe<Scalars['BooleanType']['output']>;
  isCentered?: Maybe<Scalars['BooleanType']['output']>;
  isForm?: Maybe<Scalars['BooleanType']['output']>;
  isListWithImage?: Maybe<Scalars['BooleanType']['output']>;
  isMainHero?: Maybe<Scalars['BooleanType']['output']>;
  logoWall: Array<FileField>;
  logoWallCaption?: Maybe<Scalars['String']['output']>;
  marginBottom?: Maybe<Scalars['IntType']['output']>;
  pointsList?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  width?: Maybe<Scalars['IntType']['output']>;
  withAnimation?: Maybe<Scalars['BooleanType']['output']>;
};


/** Block of type Hero (hero) */
export type HeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Hero (hero) */
export type HeroRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Hero (hero) */
export type HeroRecordPointsListArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Hero With Background (hero_with_background) */
export type HeroWithBackgroundRecord = RecordInterface & {
  __typename?: 'HeroWithBackgroundRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  backgroundGradient?: Maybe<FileField>;
  backgroundGradientMobile?: Maybe<FileField>;
  backgroundImage?: Maybe<FileField>;
  buttons: Array<ButtonRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  highlightColor?: Maybe<ColorField>;
  id: Scalars['ItemId']['output'];
  logoWall: Array<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Hero With Background (hero_with_background) */
export type HeroWithBackgroundRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Hero With Background (hero_with_background) */
export type HeroWithBackgroundRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroWithFormModelFormField = FormEmailRecord | FormLargeRecord;

/** Block of type Hero With Form (hero_with_form) */
export type HeroWithFormRecord = RecordInterface & {
  __typename?: 'HeroWithFormRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  backgroundColor?: Maybe<ColorField>;
  backgroundImage?: Maybe<FileField>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  form?: Maybe<HeroWithFormModelFormField>;
  hasLogoWall?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  isMainHero?: Maybe<Scalars['BooleanType']['output']>;
  isWhiteTextColor?: Maybe<Scalars['BooleanType']['output']>;
  logoWall: Array<FileField>;
  logoWallCaption?: Maybe<Scalars['String']['output']>;
  marginBottom?: Maybe<Scalars['IntType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  width?: Maybe<Scalars['IntType']['output']>;
};


/** Block of type Hero With Form (hero_with_form) */
export type HeroWithFormRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Hero With Form (hero_with_form) */
export type HeroWithFormRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Hero with Lottie (hero_with_lottie) */
export type HeroWithLottieRecord = RecordInterface & {
  __typename?: 'HeroWithLottieRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionUnderForm?: Maybe<Scalars['String']['output']>;
  form?: Maybe<FormEmailRecord>;
  hasLottieAnimation?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  isForm?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Hero with Lottie (hero_with_lottie) */
export type HeroWithLottieRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Hero with Lottie (hero_with_lottie) */
export type HeroWithLottieRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Image Content Block (image_content_block) */
export type ImageContentBlockRecord = RecordInterface & {
  __typename?: 'ImageContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  asset?: Maybe<FileField>;
  avatar?: Maybe<FileField>;
  avatarShield?: Maybe<FileField>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  customMargin?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  imagePositioning: Scalars['String']['output'];
  isWide?: Maybe<Scalars['BooleanType']['output']>;
  loopLottieFile?: Maybe<Scalars['BooleanType']['output']>;
  lottieData?: Maybe<FileField>;
  multiImage: Array<FileField>;
  preTitle?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  secondaryCta?: Maybe<ButtonRecord>;
  shadow?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  withAsset?: Maybe<Scalars['BooleanType']['output']>;
};


/** Block of type Image Content Block (image_content_block) */
export type ImageContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Image Content Block (image_content_block) */
export type ImageContentBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Image Content Block (image_content_block) */
export type ImageContentBlockRecordQuoteArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Image with 3ups Content Block (image_with3ups_content_block) */
export type ImageWith3upsContentBlockRecord = RecordInterface & {
  __typename?: 'ImageWith3upsContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  columns: Array<ThreeColumnRecord>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  imagePositioning: Scalars['String']['output'];
  isWide?: Maybe<Scalars['BooleanType']['output']>;
  preTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Image with 3ups Content Block (image_with3ups_content_block) */
export type ImageWith3upsContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Image with 3ups Content Block (image_with3ups_content_block) */
export type ImageWith3upsContentBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Information Card (information_card) */
export type InformationCardRecord = RecordInterface & {
  __typename?: 'InformationCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Information Card (information_card) */
export type InformationCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type Integration Content Block (integration_content_block) */
export type IntegrationContentBlockRecord = RecordInterface & {
  __typename?: 'IntegrationContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cardsPerPage?: Maybe<Scalars['IntType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  featuredIntegrations: Array<TextBlockRecord>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Integration Content Block (integration_content_block) */
export type IntegrationContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Investor Content Block (investor_content_block) */
export type InvestorContentBlockRecord = RecordInterface & {
  __typename?: 'InvestorContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Investor Content Block (investor_content_block) */
export type InvestorContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

/** Block of type Jobs Content Block (jobs_content_block) */
export type JobsContentBlockRecord = RecordInterface & {
  __typename?: 'JobsContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  showroletypes?: Maybe<Scalars['BooleanType']['output']>;
  teamFiltersOrder: Array<TextBlockRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  urlLever: Scalars['String']['output'];
};


/** Block of type Jobs Content Block (jobs_content_block) */
export type JobsContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export type LinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  linkDescription?: InputMaybe<StringFilter>;
  linkIcon?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum LinkModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkDescriptionAsc = 'linkDescription_ASC',
  LinkDescriptionDesc = 'linkDescription_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Record of type link (link) */
export type LinkRecord = RecordInterface & {
  __typename?: 'LinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkDescription?: Maybe<Scalars['String']['output']>;
  linkIcon?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type link (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type links array (links_array) */
export type LinksArrayRecord = RecordInterface & {
  __typename?: 'LinksArrayRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<LinkRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type links array (links_array) */
export type LinksArrayRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type LinksColumnModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinksColumnModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinksColumnModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  columnLinks?: InputMaybe<LinksFilter>;
  columnTitle?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum LinksColumnModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  ColumnTitleAsc = 'columnTitle_ASC',
  ColumnTitleDesc = 'columnTitle_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type links_column (links_column) */
export type LinksColumnRecord = RecordInterface & {
  __typename?: 'LinksColumnRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  columnLinks: Array<LinkRecord>;
  columnTitle: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type links_column (links_column) */
export type LinksColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Block of type LinksColumn (linkscolumn) */
export type LinkscolumnRecord = RecordInterface & {
  __typename?: 'LinkscolumnRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  columtitle: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<LinkRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type LinksColumn (linkscolumn) */
export type LinkscolumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Logos Block Animated (logos_block_animated) */
export type LogosBlockAnimatedRecord = RecordInterface & {
  __typename?: 'LogosBlockAnimatedRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  caption?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logos: Array<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Logos Block Animated (logos_block_animated) */
export type LogosBlockAnimatedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Logos Block (logos_block) */
export type LogosBlockRecord = RecordInterface & {
  __typename?: 'LogosBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  caption?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logos: Array<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Logos Block (logos_block) */
export type LogosBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

/** Block of type Navigation Module (navigation_module) */
export type NavigationModuleRecord = RecordInterface & {
  __typename?: 'NavigationModuleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: Array<LinksColumnRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleHighlightColor?: Maybe<ColorField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Navigation Module (navigation_module) */
export type NavigationModuleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Navigation Module (navigation_module) */
export type NavigationModuleRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewTestimonialSlideModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewTestimonialSlideModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewTestimonialSlideModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  asG2Review?: InputMaybe<BooleanFilter>;
  cardBackgroundColor?: InputMaybe<ColorFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  ctaLink?: InputMaybe<LinkFilter>;
  headline?: InputMaybe<StringFilter>;
  headlineHighlight?: InputMaybe<ColorFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logos?: InputMaybe<GalleryFilter>;
  personName?: InputMaybe<StringFilter>;
  personTitle?: InputMaybe<StringFilter>;
  quote?: InputMaybe<TextFilter>;
  rating?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum NewTestimonialSlideModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  AsG2ReviewAsc = 'asG2Review_ASC',
  AsG2ReviewDesc = 'asG2Review_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PersonNameAsc = 'personName_ASC',
  PersonNameDesc = 'personName_DESC',
  PersonTitleAsc = 'personTitle_ASC',
  PersonTitleDesc = 'personTitle_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type new testimonial slide (new_testimonial_slide) */
export type NewTestimonialSlideRecord = RecordInterface & {
  __typename?: 'NewTestimonialSlideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  asG2Review?: Maybe<Scalars['BooleanType']['output']>;
  cardBackgroundColor?: Maybe<ColorField>;
  createdAt: Scalars['DateTime']['output'];
  ctaLink?: Maybe<LinkRecord>;
  headline?: Maybe<Scalars['String']['output']>;
  headlineHighlight?: Maybe<ColorField>;
  id: Scalars['ItemId']['output'];
  logos: Array<FileField>;
  personName?: Maybe<Scalars['String']['output']>;
  personTitle?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['FloatType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type new testimonial slide (new_testimonial_slide) */
export type NewTestimonialSlideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type new testimonial slide (new_testimonial_slide) */
export type NewTestimonialSlideRecordQuoteArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

export type PageModelContentField = BadgesBlockRecord | BlogCardsGridRecord | CardsArrayContentBlockRecord | CaseStudyBlockRecord | CaseStudyRelatedRecord | CodeBlockRecord | CodeContentBlockRecord | ContactContentBlockRecord | ContactFormRecord | FaqContentBlockRecord | FeaturesGridRecord | FormContentBlockRecord | FullLawContentBlockRecord | GeneralContentBlockRecord | GetStartedRecord | GlossaryBlockRecord | HeroNewStyleRecord | HeroRecord | HeroWithBackgroundRecord | HeroWithFormRecord | ImageContentBlockRecord | ImageWith3upsContentBlockRecord | IntegrationContentBlockRecord | InvestorContentBlockRecord | JobsContentBlockRecord | LogosBlockAnimatedRecord | LogosBlockRecord | NavigationModuleRecord | PricingRecord | QuoteContentBlockRecord | ResourcesFeaturedRecord | ResourcesHeroRecord | ResourcesListRecord | ResourcesSectionRecord | SecurityLabelContentBlockRecord | SliderContentBlockRecord | StatsBlockRecord | StoriesGridContentBlockRecord | StoryContentBlockRecord | TestimonialSliderNewStyleRecord | TestimonialSliderRecord | TextContentBlockRecord | ThreeColumnsBlockRecord | VideoBlockRecord;

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  allowChatBot?: InputMaybe<BooleanFilter>;
  calendlyBranding?: InputMaybe<BooleanFilter>;
  calendlyUrl?: InputMaybe<StringFilter>;
  calendlyWidgetColor?: InputMaybe<ColorFilter>;
  calendlyWidgetText?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  darkTheme?: InputMaybe<BooleanFilter>;
  disabled?: InputMaybe<BooleanFilter>;
  enablePopupWidget?: InputMaybe<BooleanFilter>;
  footer?: InputMaybe<LinkFilter>;
  hasMainHero?: InputMaybe<BooleanFilter>;
  header?: InputMaybe<LinkFilter>;
  headerBackground?: InputMaybe<ColorFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  isHeaderColored?: InputMaybe<BooleanFilter>;
  isHeaderTextWhite?: InputMaybe<BooleanFilter>;
  isRightSideHeaderWhite?: InputMaybe<BooleanFilter>;
  noIndex?: InputMaybe<BooleanFilter>;
  pageScriptBody?: InputMaybe<TextFilter>;
  pathname?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PageModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  AllowChatBotAsc = 'allowChatBot_ASC',
  AllowChatBotDesc = 'allowChatBot_DESC',
  CalendlyBrandingAsc = 'calendlyBranding_ASC',
  CalendlyBrandingDesc = 'calendlyBranding_DESC',
  CalendlyUrlAsc = 'calendlyUrl_ASC',
  CalendlyUrlDesc = 'calendlyUrl_DESC',
  CalendlyWidgetTextAsc = 'calendlyWidgetText_ASC',
  CalendlyWidgetTextDesc = 'calendlyWidgetText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DarkThemeAsc = 'darkTheme_ASC',
  DarkThemeDesc = 'darkTheme_DESC',
  DisabledAsc = 'disabled_ASC',
  DisabledDesc = 'disabled_DESC',
  EnablePopupWidgetAsc = 'enablePopupWidget_ASC',
  EnablePopupWidgetDesc = 'enablePopupWidget_DESC',
  HasMainHeroAsc = 'hasMainHero_ASC',
  HasMainHeroDesc = 'hasMainHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsHeaderColoredAsc = 'isHeaderColored_ASC',
  IsHeaderColoredDesc = 'isHeaderColored_DESC',
  IsHeaderTextWhiteAsc = 'isHeaderTextWhite_ASC',
  IsHeaderTextWhiteDesc = 'isHeaderTextWhite_DESC',
  IsRightSideHeaderWhiteAsc = 'isRightSideHeaderWhite_ASC',
  IsRightSideHeaderWhiteDesc = 'isRightSideHeaderWhite_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type page (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  allowChatBot?: Maybe<Scalars['BooleanType']['output']>;
  calendlyBranding?: Maybe<Scalars['BooleanType']['output']>;
  calendlyUrl?: Maybe<Scalars['String']['output']>;
  calendlyWidgetColor?: Maybe<ColorField>;
  calendlyWidgetText?: Maybe<Scalars['String']['output']>;
  content: Array<PageModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  darkTheme?: Maybe<Scalars['BooleanType']['output']>;
  disabled?: Maybe<Scalars['BooleanType']['output']>;
  enablePopupWidget?: Maybe<Scalars['BooleanType']['output']>;
  footer?: Maybe<FooterRecord>;
  hasMainHero?: Maybe<Scalars['BooleanType']['output']>;
  header?: Maybe<HeaderRecord>;
  headerBackground?: Maybe<ColorField>;
  id: Scalars['ItemId']['output'];
  internalName: Scalars['String']['output'];
  isHeaderColored?: Maybe<Scalars['BooleanType']['output']>;
  isHeaderTextWhite?: Maybe<Scalars['BooleanType']['output']>;
  isRightSideHeaderWhite?: Maybe<Scalars['BooleanType']['output']>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  pageScriptBody?: Maybe<Scalars['String']['output']>;
  pathname: Scalars['String']['output'];
  seo?: Maybe<SeoField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type page (page) */
export type PageRecordPageScriptBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type PostModelContentBlocksField = ContentHeadingRecord | FormContentBlockRecord | SingleImageRecord | TableRecord;

export type PostModelContentField = {
  __typename?: 'PostModelContentField';
  blocks: Array<PostModelContentBlocksField>;
  links: Array<CalloutboxRecord>;
  value: Scalars['JsonField']['output'];
};

export type PostModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  allowChatBot?: InputMaybe<BooleanFilter>;
  author?: InputMaybe<LinksFilter>;
  category?: InputMaybe<LinksFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  date?: InputMaybe<DateTimeFilter>;
  excerpt?: InputMaybe<StringFilter>;
  featured?: InputMaybe<BooleanFilter>;
  header?: InputMaybe<LinkFilter>;
  hero?: InputMaybe<FileFilter>;
  hideHero?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  readTime?: InputMaybe<IntegerFilter>;
  secret?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<StringFilter>;
  specialPick?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PostModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  AllowChatBotAsc = 'allowChatBot_ASC',
  AllowChatBotDesc = 'allowChatBot_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  HideHeroAsc = 'hideHero_ASC',
  HideHeroDesc = 'hideHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReadTimeAsc = 'readTime_ASC',
  ReadTimeDesc = 'readTime_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SpecialPickAsc = 'specialPick_ASC',
  SpecialPickDesc = 'specialPick_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type post (post) */
export type PostRecord = RecordInterface & {
  __typename?: 'PostRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  allowChatBot?: Maybe<Scalars['BooleanType']['output']>;
  author: Array<AuthorRecord>;
  category: Array<CategoryRecord>;
  content?: Maybe<PostModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  excerpt: Scalars['String']['output'];
  featured?: Maybe<Scalars['BooleanType']['output']>;
  header?: Maybe<HeaderRecord>;
  hero: FileField;
  hideHero?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  readTime?: Maybe<Scalars['IntType']['output']>;
  secret?: Maybe<Scalars['BooleanType']['output']>;
  slug: Scalars['String']['output'];
  specialPick?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type post (post) */
export type PostRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Pricing Callout Block (pricing_callout_block) */
export type PricingCalloutBlockRecord = RecordInterface & {
  __typename?: 'PricingCalloutBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  ctaTitle?: Maybe<Scalars['String']['output']>;
  ctaUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Pricing Callout Block (pricing_callout_block) */
export type PricingCalloutBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Pricing (pricing) */
export type PricingRecord = RecordInterface & {
  __typename?: 'PricingRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  products: Array<ProductRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Pricing (pricing) */
export type PricingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Pricing Table Cell (pricing_table_cell) */
export type PricingTableCellRecord = RecordInterface & {
  __typename?: 'PricingTableCellRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  asButton?: Maybe<Scalars['BooleanType']['output']>;
  asHeading?: Maybe<Scalars['BooleanType']['output']>;
  checked?: Maybe<Scalars['BooleanType']['output']>;
  color?: Maybe<ColorField>;
  createdAt: Scalars['DateTime']['output'];
  ctaUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Pricing Table Cell (pricing_table_cell) */
export type PricingTableCellRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Pricing Table (pricing_table) */
export type PricingTableRecord = RecordInterface & {
  __typename?: 'PricingTableRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  tableBody: Array<PricingTableRowRecord>;
  tableFooter: Array<PricingTableRowRecord>;
  tableHead: Array<PricingTableRowRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Pricing Table (pricing_table) */
export type PricingTableRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Pricing Table Row (pricing_table_row) */
export type PricingTableRowRecord = RecordInterface & {
  __typename?: 'PricingTableRowRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  asTableBodyHeader?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  row: Array<PricingTableCellRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Pricing Table Row (pricing_table_row) */
export type PricingTableRowRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Product Feature Block (product_feature_block) */
export type ProductFeatureBlockRecord = RecordInterface & {
  __typename?: 'ProductFeatureBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Product Feature Block (product_feature_block) */
export type ProductFeatureBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProductFeatureModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFeatureModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFeatureModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  productDescription?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ProductFeatureModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type product_feature (product_feature) */
export type ProductFeatureRecord = RecordInterface & {
  __typename?: 'ProductFeatureRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  productDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type product_feature (product_feature) */
export type ProductFeatureRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type product_feature (product_feature) */
export type ProductFeatureRecordProductDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Product Feature Set (product_feature_set) */
export type ProductFeatureSetRecord = RecordInterface & {
  __typename?: 'ProductFeatureSetRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  features: Array<ProductFeatureBlockRecord>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Product Feature Set (product_feature_set) */
export type ProductFeatureSetRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProductModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ProductModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type product (product) */
export type ProductRecord = RecordInterface & {
  __typename?: 'ProductRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  calloutBox: Array<PricingCalloutBlockRecord>;
  createdAt: Scalars['DateTime']['output'];
  faq: Array<FaqContentBlockRecord>;
  features: Array<ProductFeatureSetRecord>;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  pricingTable: Array<PricingTableRecord>;
  tiers: Array<TierCardRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type product (product) */
export type ProductRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAuthorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allButtonsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCalloutboxesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCaseStudyCardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCodeSnippetsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFootersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFormEmailsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFormLargesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHeadersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLinksColumnsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewTestimonialSlidesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPostsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductFeaturesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allQuestionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSlidesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStatisticsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTermsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTestimonialSlidesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allThreeColumnsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allVideoPopupsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allAuthors: Array<AuthorRecord>;
  /** Returns a collection of records */
  allButtons: Array<ButtonRecord>;
  /** Returns a collection of records */
  allCalloutboxes: Array<CalloutboxRecord>;
  /** Returns a collection of records */
  allCards: Array<CardRecord>;
  /** Returns a collection of records */
  allCaseStudyCards: Array<CaseStudyCardRecord>;
  /** Returns a collection of records */
  allCategories: Array<CategoryRecord>;
  /** Returns a collection of records */
  allCodeSnippets: Array<CodeSnippetRecord>;
  /** Returns a collection of records */
  allFooters: Array<FooterRecord>;
  /** Returns a collection of records */
  allFormEmails: Array<FormEmailRecord>;
  /** Returns a collection of records */
  allFormLarges: Array<FormLargeRecord>;
  /** Returns a collection of records */
  allHeaders: Array<HeaderRecord>;
  /** Returns a collection of records */
  allLinks: Array<LinkRecord>;
  /** Returns a collection of records */
  allLinksColumns: Array<LinksColumnRecord>;
  /** Returns a collection of records */
  allNewTestimonialSlides: Array<NewTestimonialSlideRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allPosts: Array<PostRecord>;
  /** Returns a collection of records */
  allProductFeatures: Array<ProductFeatureRecord>;
  /** Returns a collection of records */
  allProducts: Array<ProductRecord>;
  /** Returns a collection of records */
  allQuestions: Array<QuestionRecord>;
  /** Returns a collection of records */
  allSlides: Array<SlideRecord>;
  /** Returns a collection of records */
  allStatistics: Array<StatisticRecord>;
  /** Returns a collection of records */
  allStories: Array<StoryRecord>;
  /** Returns a collection of records */
  allTerms: Array<TermRecord>;
  /** Returns a collection of records */
  allTestimonialSlides: Array<TestimonialSlideRecord>;
  /** Returns a collection of records */
  allThreeColumns: Array<ThreeColumnRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allVideoPopups: Array<VideoPopupRecord>;
  /** Returns a specific record */
  author?: Maybe<AuthorRecord>;
  /** Returns a specific record */
  button?: Maybe<ButtonRecord>;
  /** Returns a specific record */
  calloutbox?: Maybe<CalloutboxRecord>;
  /** Returns a specific record */
  card?: Maybe<CardRecord>;
  /** Returns a specific record */
  caseStudyCard?: Maybe<CaseStudyCardRecord>;
  /** Returns a specific record */
  category?: Maybe<CategoryRecord>;
  /** Returns a specific record */
  codeSnippet?: Maybe<CodeSnippetRecord>;
  /** Returns a specific record */
  footer?: Maybe<FooterRecord>;
  /** Returns a specific record */
  formEmail?: Maybe<FormEmailRecord>;
  /** Returns a specific record */
  formLarge?: Maybe<FormLargeRecord>;
  /** Returns a specific record */
  header?: Maybe<HeaderRecord>;
  /** Returns a specific record */
  link?: Maybe<LinkRecord>;
  /** Returns a specific record */
  linksColumn?: Maybe<LinksColumnRecord>;
  /** Returns a specific record */
  newTestimonialSlide?: Maybe<NewTestimonialSlideRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns a specific record */
  post?: Maybe<PostRecord>;
  /** Returns a specific record */
  product?: Maybe<ProductRecord>;
  /** Returns a specific record */
  productFeature?: Maybe<ProductFeatureRecord>;
  /** Returns a specific record */
  question?: Maybe<QuestionRecord>;
  /** Returns a specific record */
  slide?: Maybe<SlideRecord>;
  /** Returns a specific record */
  statistic?: Maybe<StatisticRecord>;
  /** Returns a specific record */
  story?: Maybe<StoryRecord>;
  /** Returns a specific record */
  term?: Maybe<TermRecord>;
  /** Returns a specific record */
  testimonialSlide?: Maybe<TestimonialSlideRecord>;
  /** Returns a specific record */
  threeColumn?: Maybe<ThreeColumnRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  videoPopup?: Maybe<VideoPopupRecord>;
};


/** The query root for this schema */
export type Query_AllAuthorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllButtonsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ButtonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCalloutboxesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CalloutboxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCardsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCaseStudyCardsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCodeSnippetsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CodeSnippetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFootersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FooterModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFormEmailsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormEmailModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFormLargesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormLargeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllHeadersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllLinksColumnsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LinksColumnModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllLinksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllNewTestimonialSlidesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewTestimonialSlideModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPostsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductFeaturesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllQuestionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<QuestionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSlidesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SlideModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllStatisticsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatisticModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllStoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTermsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TermModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTestimonialSlidesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialSlideModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllThreeColumnsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ThreeColumnModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllVideoPopupsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoPopupModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllButtonsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ButtonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ButtonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCalloutboxesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CalloutboxModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CalloutboxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCaseStudyCardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyCardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCodeSnippetsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CodeSnippetModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CodeSnippetModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFootersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FooterModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFormEmailsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormEmailModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormEmailModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFormLargesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormLargeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormLargeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllHeadersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllLinksColumnsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LinksColumnModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LinksColumnModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllNewTestimonialSlidesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewTestimonialSlideModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewTestimonialSlideModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProductFeaturesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllQuestionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<QuestionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<QuestionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSlidesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SlideModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SlideModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllStatisticsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatisticModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatisticModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllStoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTermsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TermModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TermModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTestimonialSlidesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialSlideModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialSlideModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllThreeColumnsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ThreeColumnModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ThreeColumnModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllVideoPopupsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoPopupModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VideoPopupModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAuthorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryButtonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ButtonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ButtonModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCalloutboxArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CalloutboxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CalloutboxModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CardModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCaseStudyCardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyCardModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCodeSnippetArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CodeSnippetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CodeSnippetModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FooterModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFormEmailArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormEmailModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormEmailModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFormLargeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormLargeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormLargeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryHeaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryLinksColumnArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LinksColumnModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LinksColumnModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNewTestimonialSlideArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewTestimonialSlideModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewTestimonialSlideModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPostArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductFeatureArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFeatureModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFeatureModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryQuestionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<QuestionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<QuestionModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySlideArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SlideModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SlideModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStatisticArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatisticModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatisticModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTermArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TermModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TermModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTestimonialSlideArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialSlideModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialSlideModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryThreeColumnArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ThreeColumnModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ThreeColumnModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};


/** The query root for this schema */
export type QueryVideoPopupArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoPopupModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VideoPopupModelOrderBy>>>;
};

export type QuestionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuestionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuestionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  isOpen?: InputMaybe<BooleanFilter>;
  question?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum QuestionModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsOpenAsc = 'isOpen_ASC',
  IsOpenDesc = 'isOpen_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type question (question) */
export type QuestionRecord = RecordInterface & {
  __typename?: 'QuestionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  isOpen?: Maybe<Scalars['BooleanType']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type question (question) */
export type QuestionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type question (question) */
export type QuestionRecordAnswerArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Quote Card (quote_card) */
export type QuoteCardRecord = RecordInterface & {
  __typename?: 'QuoteCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  avatar?: Maybe<FileField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Quote Card (quote_card) */
export type QuoteCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Quote Card (quote_card) */
export type QuoteCardRecordQuoteArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Quote Content Block (quote_content_block) */
export type QuoteContentBlockRecord = RecordInterface & {
  __typename?: 'QuoteContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  quote?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Quote Content Block (quote_content_block) */
export type QuoteContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Quote Content Block (quote_content_block) */
export type QuoteContentBlockRecordQuoteArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

/** Block of type Resources Featured (resources_featured) */
export type ResourcesFeaturedRecord = RecordInterface & {
  __typename?: 'ResourcesFeaturedRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featured?: Maybe<CardRecord>;
  id: Scalars['ItemId']['output'];
  reversed?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Resources Featured (resources_featured) */
export type ResourcesFeaturedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Resources Hero (resources_hero) */
export type ResourcesHeroRecord = RecordInterface & {
  __typename?: 'ResourcesHeroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Resources Hero (resources_hero) */
export type ResourcesHeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Resources Hero (resources_hero) */
export type ResourcesHeroRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Resources List (resources_list) */
export type ResourcesListRecord = RecordInterface & {
  __typename?: 'ResourcesListRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<CardRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Resources List (resources_list) */
export type ResourcesListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Resources Section (resources_section) */
export type ResourcesSectionRecord = RecordInterface & {
  __typename?: 'ResourcesSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featured?: Maybe<CardRecord>;
  id: Scalars['ItemId']['output'];
  resources: Array<CardRecord>;
  reverseFeature?: Maybe<Scalars['BooleanType']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Resources Section (resources_section) */
export type ResourcesSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Resources Section (resources_section) */
export type ResourcesSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

/** Block of type Security Label Content Block (security_label_content_block) */
export type SecurityLabelContentBlockRecord = RecordInterface & {
  __typename?: 'SecurityLabelContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  id: Scalars['ItemId']['output'];
  media?: Maybe<FileField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Security Label Content Block (security_label_content_block) */
export type SecurityLabelContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type SEO (seo) */
export type SeoRecord = RecordInterface & {
  __typename?: 'SeoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  favicon: Array<FileField>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<Scalars['String']['output']>;
  seoKeywords?: Maybe<Scalars['String']['output']>;
  socialImage?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type SEO (seo) */
export type SeoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type SEO (seo) */
export type SeoRecordSeoArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Single Image (single_image) */
export type SingleImageRecord = RecordInterface & {
  __typename?: 'SingleImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Single Image (single_image) */
export type SingleImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type single link (single_link) */
export type SingleLinkRecord = RecordInterface & {
  __typename?: 'SingleLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  singleLink?: Maybe<LinkRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type single link (single_link) */
export type SingleLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  En = 'en'
}

export type SlideModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SlideModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SlideModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  domain?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  images?: InputMaybe<GalleryFilter>;
  miniature?: InputMaybe<FileFilter>;
  mobileImage?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum SlideModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type slide (slide) */
export type SlideRecord = RecordInterface & {
  __typename?: 'SlideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  images: Array<FileField>;
  miniature?: Maybe<FileField>;
  mobileImage?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type slide (slide) */
export type SlideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Slider Content Block (slider_content_block) */
export type SliderContentBlockRecord = RecordInterface & {
  __typename?: 'SliderContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  animation?: Maybe<FileField>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  slides: Array<SlideRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Slider Content Block (slider_content_block) */
export type SliderContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Slider Content Block (slider_content_block) */
export type SliderContentBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Source Card (source_card) */
export type SourceCardRecord = RecordInterface & {
  __typename?: 'SourceCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type Source Card (source_card) */
export type SourceCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type StatisticModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatisticModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatisticModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  icon?: InputMaybe<FileFilter>;
  iconColor?: InputMaybe<ColorFilter>;
  id?: InputMaybe<ItemIdFilter>;
  number?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum StatisticModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type statistic (statistic) */
export type StatisticRecord = RecordInterface & {
  __typename?: 'StatisticRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<FileField>;
  iconColor?: Maybe<ColorField>;
  id: Scalars['ItemId']['output'];
  number?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type statistic (statistic) */
export type StatisticRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Stats Block (stats_block) */
export type StatsBlockRecord = RecordInterface & {
  __typename?: 'StatsBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  centerTextAndStats?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  stats: Array<StatisticRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Stats Block (stats_block) */
export type StatsBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Stats Block (stats_block) */
export type StatsBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Block of type Stories Grid Content Block (stories_grid_content_block) */
export type StoriesGridContentBlockRecord = RecordInterface & {
  __typename?: 'StoriesGridContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  stories: Array<StoryRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Stories Grid Content Block (stories_grid_content_block) */
export type StoriesGridContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Story Content Block (story_content_block) */
export type StoryContentBlockRecord = RecordInterface & {
  __typename?: 'StoryContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  heroBackground?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Story Content Block (story_content_block) */
export type StoryContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Story Hero (story_hero) */
export type StoryHeroRecord = RecordInterface & {
  __typename?: 'StoryHeroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  background?: Maybe<FileField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Story Hero (story_hero) */
export type StoryHeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type StoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  about?: InputMaybe<TextFilter>;
  aboutShort?: InputMaybe<TextFilter>;
  background?: InputMaybe<FileFilter>;
  challenge?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  customerName?: InputMaybe<StringFilter>;
  disabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  informationCars?: InputMaybe<LinksFilter>;
  logo?: InputMaybe<FileFilter>;
  pathname?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  results?: InputMaybe<TextFilter>;
  seo?: InputMaybe<SeoFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum StoryModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CustomerNameAsc = 'customerName_ASC',
  CustomerNameDesc = 'customerName_DESC',
  DisabledAsc = 'disabled_ASC',
  DisabledDesc = 'disabled_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type story (story) */
export type StoryRecord = RecordInterface & {
  __typename?: 'StoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  about?: Maybe<Scalars['String']['output']>;
  aboutShort?: Maybe<Scalars['String']['output']>;
  background?: Maybe<FileField>;
  challenge?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  disabled?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  informationCars: Array<CardRecord>;
  logo?: Maybe<FileField>;
  pathname: Scalars['String']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  results?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type story (story) */
export type StoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type story (story) */
export type StoryRecordAboutArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type story (story) */
export type StoryRecordAboutShortArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type story (story) */
export type StoryRecordChallengeArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type story (story) */
export type StoryRecordResultsArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Structured Text fields */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Block of type Table (table) */
export type TableRecord = RecordInterface & {
  __typename?: 'TableRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  rows: Array<TableRowRecord>;
  tableHead: Array<TableRowRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Table (table) */
export type TableRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Table Row (table_row) */
export type TableRowRecord = RecordInterface & {
  __typename?: 'TableRowRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  columns: Array<TextBlockRecord>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Table Row (table_row) */
export type TableRowRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

export type TermModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TermModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TermModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  footer?: InputMaybe<LinkFilter>;
  header?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  noIndex?: InputMaybe<BooleanFilter>;
  pathname?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum TermModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type term (term) */
export type TermRecord = RecordInterface & {
  __typename?: 'TermRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  featuredTerms: Array<FeaturedTermsBlockRecord>;
  footer?: Maybe<FooterRecord>;
  header?: Maybe<HeaderRecord>;
  id: Scalars['ItemId']['output'];
  internalName: Scalars['String']['output'];
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  pathname: Scalars['String']['output'];
  seo?: Maybe<SeoField>;
  tableOfContent: Array<AnchorRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type term (term) */
export type TermRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type term (term) */
export type TermRecordContentArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialSlideModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialSlideModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialSlideModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  companyName?: InputMaybe<StringFilter>;
  companyUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  ctaLink?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  logoBackgroundColour?: InputMaybe<ColorFilter>;
  personName?: InputMaybe<StringFilter>;
  quote?: InputMaybe<TextFilter>;
  quoteOnly?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  titleOfPerson?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum TestimonialSlideModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  CompanyUrlAsc = 'companyUrl_ASC',
  CompanyUrlDesc = 'companyUrl_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PersonNameAsc = 'personName_ASC',
  PersonNameDesc = 'personName_DESC',
  QuoteOnlyAsc = 'quoteOnly_ASC',
  QuoteOnlyDesc = 'quoteOnly_DESC',
  TitleOfPersonAsc = 'titleOfPerson_ASC',
  TitleOfPersonDesc = 'titleOfPerson_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type testimonial slide (testimonial_slide) */
export type TestimonialSlideRecord = RecordInterface & {
  __typename?: 'TestimonialSlideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  companyName?: Maybe<Scalars['String']['output']>;
  companyUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  ctaLink?: Maybe<LinkRecord>;
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  logoBackgroundColour?: Maybe<ColorField>;
  personName: Scalars['String']['output'];
  quote?: Maybe<Scalars['String']['output']>;
  quoteOnly?: Maybe<Scalars['BooleanType']['output']>;
  title: Scalars['String']['output'];
  titleOfPerson: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type testimonial slide (testimonial_slide) */
export type TestimonialSlideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type testimonial slide (testimonial_slide) */
export type TestimonialSlideRecordQuoteArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Testimonial Slider-New Style (testimonial_slider_new_style) */
export type TestimonialSliderNewStyleRecord = RecordInterface & {
  __typename?: 'TestimonialSliderNewStyleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  badges: Array<FileField>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  readMoreText?: Maybe<Scalars['String']['output']>;
  slides: Array<NewTestimonialSlideRecord>;
  stats: Array<StatisticRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Testimonial Slider-New Style (testimonial_slider_new_style) */
export type TestimonialSliderNewStyleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Testimonial Slider-New Style (testimonial_slider_new_style) */
export type TestimonialSliderNewStyleRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Testimonial Slider-New Style (testimonial_slider_new_style) */
export type TestimonialSliderNewStyleRecordReadMoreTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Testimonial Slider (testimonial_slider) */
export type TestimonialSliderRecord = RecordInterface & {
  __typename?: 'TestimonialSliderRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  qouteOnly?: Maybe<Scalars['BooleanType']['output']>;
  readMoreText?: Maybe<Scalars['String']['output']>;
  slides: Array<TestimonialSlideRecord>;
  stats: Array<StatisticRecord>;
  updatedAt: Scalars['DateTime']['output'];
  withWhiteBackground?: Maybe<Scalars['BooleanType']['output']>;
};


/** Block of type Testimonial Slider (testimonial_slider) */
export type TestimonialSliderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Testimonial Slider (testimonial_slider) */
export type TestimonialSliderRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Testimonial Slider (testimonial_slider) */
export type TestimonialSliderRecordReadMoreTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Text block (text_block) */
export type TextBlockRecord = RecordInterface & {
  __typename?: 'TextBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Text block (text_block) */
export type TextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Text Content Block (text_content_block) */
export type TextContentBlockRecord = RecordInterface & {
  __typename?: 'TextContentBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Text Content Block (text_content_block) */
export type TextContentBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Text Content Block (text_content_block) */
export type TextContentBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type ThreeColumnModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ThreeColumnModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ThreeColumnModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  cta?: InputMaybe<LinkFilter>;
  description?: InputMaybe<TextFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ThreeColumnModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type column  (three_column) */
export type ThreeColumnRecord = RecordInterface & {
  __typename?: 'ThreeColumnRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type column  (three_column) */
export type ThreeColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type column  (three_column) */
export type ThreeColumnRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Columns Block (three_columns_block) */
export type ThreeColumnsBlockRecord = RecordInterface & {
  __typename?: 'ThreeColumnsBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  columns: Array<ThreeColumnRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Columns Block (three_columns_block) */
export type ThreeColumnsBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Columns Block (three_columns_block) */
export type ThreeColumnsBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Tier Card (tier_card) */
export type TierCardRecord = RecordInterface & {
  __typename?: 'TierCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  color?: Maybe<ColorField>;
  createdAt: Scalars['DateTime']['output'];
  ctaTitle?: Maybe<Scalars['String']['output']>;
  ctaUrl?: Maybe<Scalars['String']['output']>;
  customPricing?: Maybe<Scalars['String']['output']>;
  features: Array<TextBlockRecord>;
  hidePrice?: Maybe<Scalars['BooleanType']['output']>;
  highlightByDefault?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  perUnit?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['IntType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Tier Card (tier_card) */
export type TierCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type VideoBlockModelButtonField = ButtonRecord | VideoPopupRecord;

/** Block of type Video Block (video_block) */
export type VideoBlockRecord = RecordInterface & {
  __typename?: 'VideoBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alignText?: Maybe<Scalars['String']['output']>;
  button?: Maybe<VideoBlockModelButtonField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  preTitle?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<FileField>;
  updatedAt: Scalars['DateTime']['output'];
  videoBody?: Maybe<Scalars['String']['output']>;
  videoTitle?: Maybe<Scalars['String']['output']>;
  videoUrl: Scalars['String']['output'];
};


/** Block of type Video Block (video_block) */
export type VideoBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Video Block (video_block) */
export type VideoBlockRecordVideoBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

/** Block of type Video Popup Card (video_popup_card) */
export type VideoPopupCardRecord = RecordInterface & {
  __typename?: 'VideoPopupCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  videoThumbnail?: Maybe<FileField>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


/** Block of type Video Popup Card (video_popup_card) */
export type VideoPopupCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type VideoPopupModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoPopupModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoPopupModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  videoThumbnail?: InputMaybe<FileFilter>;
  videoUrl?: InputMaybe<StringFilter>;
};

export enum VideoPopupModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  _FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  _IsValidAsc = '_isValid_ASC',
  _IsValidDesc = '_isValid_DESC',
  _PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  _PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  _PublishedAtAsc = '_publishedAt_ASC',
  _PublishedAtDesc = '_publishedAt_DESC',
  _StatusAsc = '_status_ASC',
  _StatusDesc = '_status_DESC',
  _UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  _UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC'
}

/** Record of type video_popup (video_popup) */
export type VideoPopupRecord = RecordInterface & {
  __typename?: 'VideoPopupRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  videoThumbnail?: Maybe<FileField>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


/** Record of type video_popup (video_popup) */
export type VideoPopupRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type BlogCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'CategoryRecord', id: string, name: string, path: string }> };

export type BlogFeedQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  filter?: InputMaybe<PostModelFilter>;
}>;


export type BlogFeedQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'PostRecord', id: string, title: string, slug: string, readTime?: number | null, excerpt: string, _publishedAt?: string | null, hero: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }>, _allPostsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type BlogSearchQueryVariables = Exact<{
  filter?: InputMaybe<PostModelFilter>;
}>;


export type BlogSearchQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'PostRecord', id: string, title: string, slug: string }> };


export const BlogCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<BlogCategoriesQuery, BlogCategoriesQueryVariables>;
export const BlogFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostModelFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"readTime"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"300"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"200"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allPostsMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<BlogFeedQuery, BlogFeedQueryVariables>;
export const BlogSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostModelFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<BlogSearchQuery, BlogSearchQueryVariables>;