import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Brand = {
  __typename?: 'Brand';
  ID: Scalars['ID'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type BrandInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  ID: Scalars['ID'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CategoryInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBrand: Brand;
  addCategory: Category;
  addProduct: Products;
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
};


export type MutationAddBrandArgs = {
  input: BrandInput;
};


export type MutationAddCategoryArgs = {
  input: CategoryInput;
};


export type MutationAddProductArgs = {
  input: ProductInput;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type ProductInput = {
  brand: Scalars['Float'];
  category: Scalars['Float'];
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Products = {
  __typename?: 'Products';
  brand: Brand;
  category: Category;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allBrands?: Maybe<Array<Brand>>;
  allCategories?: Maybe<Array<Category>>;
  allProducts?: Maybe<Array<Products>>;
  hello: Scalars['String'];
  me?: Maybe<User>;
  product?: Maybe<Products>;
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  isAdmin: Scalars['Boolean'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined };

export type AddBrandMutationVariables = Exact<{
  input: BrandInput;
}>;


export type AddBrandMutation = { __typename?: 'Mutation', addBrand: { __typename?: 'Brand', name: string, description: string } };

export type AddCategoryMutationVariables = Exact<{
  input: CategoryInput;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'Category', name: string, description: string } };

export type AddProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'Products', name: string, description: string, price: number } };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type AllBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBrandsQuery = { __typename?: 'Query', allBrands?: Array<{ __typename?: 'Brand', ID: string, name: string, description: string }> | null | undefined };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'Query', allCategories?: Array<{ __typename?: 'Category', ID: string, name: string, description: string }> | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, isAdmin: boolean } | null | undefined };

export type GetProductQueryVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type GetProductQuery = { __typename?: 'Query', product?: { __typename?: 'Products', id: string, name: string, description: string, price: number, category: { __typename?: 'Category', ID: string, name: string, description: string }, brand: { __typename?: 'Brand', ID: string, name: string, description: string } } | null | undefined };

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Products', id: string, name: string, description: string, price: number, createdAt: string, updatedAt: string }> | null | undefined };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const AddBrandDocument = gql`
    mutation addBrand($input: BrandInput!) {
  addBrand(input: $input) {
    name
    description
  }
}
    `;

export function useAddBrandMutation() {
  return Urql.useMutation<AddBrandMutation, AddBrandMutationVariables>(AddBrandDocument);
};
export const AddCategoryDocument = gql`
    mutation addCategory($input: CategoryInput!) {
  addCategory(input: $input) {
    name
    description
  }
}
    `;

export function useAddCategoryMutation() {
  return Urql.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument);
};
export const AddProductDocument = gql`
    mutation addProduct($input: ProductInput!) {
  addProduct(input: $input) {
    name
    description
    price
  }
}
    `;

export function useAddProductMutation() {
  return Urql.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument);
};
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const AllBrandsDocument = gql`
    query AllBrands {
  allBrands {
    ID
    name
    description
  }
}
    `;

export function useAllBrandsQuery(options?: Omit<Urql.UseQueryArgs<AllBrandsQueryVariables>, 'query'>) {
  return Urql.useQuery<AllBrandsQuery>({ query: AllBrandsDocument, ...options });
};
export const AllCategoriesDocument = gql`
    query AllCategories {
  allCategories {
    ID
    name
    description
  }
}
    `;

export function useAllCategoriesQuery(options?: Omit<Urql.UseQueryArgs<AllCategoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<AllCategoriesQuery>({ query: AllCategoriesDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    isAdmin
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const GetProductDocument = gql`
    query getProduct($productId: Int!) {
  product(id: $productId) {
    id
    name
    description
    price
    category {
      ID
      name
      description
    }
    brand {
      ID
      name
      description
    }
  }
}
    `;

export function useGetProductQuery(options: Omit<Urql.UseQueryArgs<GetProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductQuery>({ query: GetProductDocument, ...options });
};
export const AllProductsDocument = gql`
    query AllProducts {
  allProducts {
    id
    name
    description
    price
    createdAt
    updatedAt
  }
}
    `;

export function useAllProductsQuery(options?: Omit<Urql.UseQueryArgs<AllProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<AllProductsQuery>({ query: AllProductsDocument, ...options });
};