
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model LoginTokens
 * 
 */
export type LoginTokens = $Result.DefaultSelection<Prisma.$LoginTokensPayload>
/**
 * Model Movies
 * 
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model MoviesCategories
 * 
 */
export type MoviesCategories = $Result.DefaultSelection<Prisma.$MoviesCategoriesPayload>
/**
 * Model FeaturedMovie
 * 
 */
export type FeaturedMovie = $Result.DefaultSelection<Prisma.$FeaturedMoviePayload>
/**
 * Model HomepageSection
 * 
 */
export type HomepageSection = $Result.DefaultSelection<Prisma.$HomepageSectionPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model BookmarkedMovies
 * 
 */
export type BookmarkedMovies = $Result.DefaultSelection<Prisma.$BookmarkedMoviesPayload>
/**
 * Model WatchedMovies
 * 
 */
export type WatchedMovies = $Result.DefaultSelection<Prisma.$WatchedMoviesPayload>
/**
 * Model Followers
 * 
 */
export type Followers = $Result.DefaultSelection<Prisma.$FollowersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loginTokens`: Exposes CRUD operations for the **LoginTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginTokens
    * const loginTokens = await prisma.loginTokens.findMany()
    * ```
    */
  get loginTokens(): Prisma.LoginTokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.MoviesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moviesCategories`: Exposes CRUD operations for the **MoviesCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoviesCategories
    * const moviesCategories = await prisma.moviesCategories.findMany()
    * ```
    */
  get moviesCategories(): Prisma.MoviesCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featuredMovie`: Exposes CRUD operations for the **FeaturedMovie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeaturedMovies
    * const featuredMovies = await prisma.featuredMovie.findMany()
    * ```
    */
  get featuredMovie(): Prisma.FeaturedMovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homepageSection`: Exposes CRUD operations for the **HomepageSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomepageSections
    * const homepageSections = await prisma.homepageSection.findMany()
    * ```
    */
  get homepageSection(): Prisma.HomepageSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmarkedMovies`: Exposes CRUD operations for the **BookmarkedMovies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookmarkedMovies
    * const bookmarkedMovies = await prisma.bookmarkedMovies.findMany()
    * ```
    */
  get bookmarkedMovies(): Prisma.BookmarkedMoviesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchedMovies`: Exposes CRUD operations for the **WatchedMovies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchedMovies
    * const watchedMovies = await prisma.watchedMovies.findMany()
    * ```
    */
  get watchedMovies(): Prisma.WatchedMoviesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followers`: Exposes CRUD operations for the **Followers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.followers.findMany()
    * ```
    */
  get followers(): Prisma.FollowersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    LoginTokens: 'LoginTokens',
    Movies: 'Movies',
    Categories: 'Categories',
    MoviesCategories: 'MoviesCategories',
    FeaturedMovie: 'FeaturedMovie',
    HomepageSection: 'HomepageSection',
    Reviews: 'Reviews',
    BookmarkedMovies: 'BookmarkedMovies',
    WatchedMovies: 'WatchedMovies',
    Followers: 'Followers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "loginTokens" | "movies" | "categories" | "moviesCategories" | "featuredMovie" | "homepageSection" | "reviews" | "bookmarkedMovies" | "watchedMovies" | "followers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      LoginTokens: {
        payload: Prisma.$LoginTokensPayload<ExtArgs>
        fields: Prisma.LoginTokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginTokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginTokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>
          }
          findFirst: {
            args: Prisma.LoginTokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginTokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>
          }
          findMany: {
            args: Prisma.LoginTokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>[]
          }
          create: {
            args: Prisma.LoginTokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>
          }
          createMany: {
            args: Prisma.LoginTokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginTokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>[]
          }
          delete: {
            args: Prisma.LoginTokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>
          }
          update: {
            args: Prisma.LoginTokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>
          }
          deleteMany: {
            args: Prisma.LoginTokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginTokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoginTokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>[]
          }
          upsert: {
            args: Prisma.LoginTokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokensPayload>
          }
          aggregate: {
            args: Prisma.LoginTokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginTokens>
          }
          groupBy: {
            args: Prisma.LoginTokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginTokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginTokensCountArgs<ExtArgs>
            result: $Utils.Optional<LoginTokensCountAggregateOutputType> | number
          }
        }
      }
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>
        fields: Prisma.MoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      MoviesCategories: {
        payload: Prisma.$MoviesCategoriesPayload<ExtArgs>
        fields: Prisma.MoviesCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>
          }
          findFirst: {
            args: Prisma.MoviesCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>
          }
          findMany: {
            args: Prisma.MoviesCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>[]
          }
          create: {
            args: Prisma.MoviesCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>
          }
          createMany: {
            args: Prisma.MoviesCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoviesCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>[]
          }
          delete: {
            args: Prisma.MoviesCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>
          }
          update: {
            args: Prisma.MoviesCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoviesCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.MoviesCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesCategoriesPayload>
          }
          aggregate: {
            args: Prisma.MoviesCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoviesCategories>
          }
          groupBy: {
            args: Prisma.MoviesCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoviesCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCategoriesCountAggregateOutputType> | number
          }
        }
      }
      FeaturedMovie: {
        payload: Prisma.$FeaturedMoviePayload<ExtArgs>
        fields: Prisma.FeaturedMovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeaturedMovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeaturedMovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>
          }
          findFirst: {
            args: Prisma.FeaturedMovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeaturedMovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>
          }
          findMany: {
            args: Prisma.FeaturedMovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>[]
          }
          create: {
            args: Prisma.FeaturedMovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>
          }
          createMany: {
            args: Prisma.FeaturedMovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeaturedMovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>[]
          }
          delete: {
            args: Prisma.FeaturedMovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>
          }
          update: {
            args: Prisma.FeaturedMovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>
          }
          deleteMany: {
            args: Prisma.FeaturedMovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeaturedMovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeaturedMovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>[]
          }
          upsert: {
            args: Prisma.FeaturedMovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedMoviePayload>
          }
          aggregate: {
            args: Prisma.FeaturedMovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeaturedMovie>
          }
          groupBy: {
            args: Prisma.FeaturedMovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturedMovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeaturedMovieCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturedMovieCountAggregateOutputType> | number
          }
        }
      }
      HomepageSection: {
        payload: Prisma.$HomepageSectionPayload<ExtArgs>
        fields: Prisma.HomepageSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomepageSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomepageSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>
          }
          findFirst: {
            args: Prisma.HomepageSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomepageSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>
          }
          findMany: {
            args: Prisma.HomepageSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>[]
          }
          create: {
            args: Prisma.HomepageSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>
          }
          createMany: {
            args: Prisma.HomepageSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomepageSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>[]
          }
          delete: {
            args: Prisma.HomepageSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>
          }
          update: {
            args: Prisma.HomepageSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>
          }
          deleteMany: {
            args: Prisma.HomepageSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomepageSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomepageSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>[]
          }
          upsert: {
            args: Prisma.HomepageSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomepageSectionPayload>
          }
          aggregate: {
            args: Prisma.HomepageSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomepageSection>
          }
          groupBy: {
            args: Prisma.HomepageSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomepageSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomepageSectionCountArgs<ExtArgs>
            result: $Utils.Optional<HomepageSectionCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      BookmarkedMovies: {
        payload: Prisma.$BookmarkedMoviesPayload<ExtArgs>
        fields: Prisma.BookmarkedMoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkedMoviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkedMoviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>
          }
          findFirst: {
            args: Prisma.BookmarkedMoviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkedMoviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>
          }
          findMany: {
            args: Prisma.BookmarkedMoviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>[]
          }
          create: {
            args: Prisma.BookmarkedMoviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>
          }
          createMany: {
            args: Prisma.BookmarkedMoviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkedMoviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>[]
          }
          delete: {
            args: Prisma.BookmarkedMoviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>
          }
          update: {
            args: Prisma.BookmarkedMoviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkedMoviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkedMoviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkedMoviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkedMoviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedMoviesPayload>
          }
          aggregate: {
            args: Prisma.BookmarkedMoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarkedMovies>
          }
          groupBy: {
            args: Prisma.BookmarkedMoviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkedMoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkedMoviesCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkedMoviesCountAggregateOutputType> | number
          }
        }
      }
      WatchedMovies: {
        payload: Prisma.$WatchedMoviesPayload<ExtArgs>
        fields: Prisma.WatchedMoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchedMoviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchedMoviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>
          }
          findFirst: {
            args: Prisma.WatchedMoviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchedMoviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>
          }
          findMany: {
            args: Prisma.WatchedMoviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>[]
          }
          create: {
            args: Prisma.WatchedMoviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>
          }
          createMany: {
            args: Prisma.WatchedMoviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchedMoviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>[]
          }
          delete: {
            args: Prisma.WatchedMoviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>
          }
          update: {
            args: Prisma.WatchedMoviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>
          }
          deleteMany: {
            args: Prisma.WatchedMoviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchedMoviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchedMoviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>[]
          }
          upsert: {
            args: Prisma.WatchedMoviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedMoviesPayload>
          }
          aggregate: {
            args: Prisma.WatchedMoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchedMovies>
          }
          groupBy: {
            args: Prisma.WatchedMoviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchedMoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchedMoviesCountArgs<ExtArgs>
            result: $Utils.Optional<WatchedMoviesCountAggregateOutputType> | number
          }
        }
      }
      Followers: {
        payload: Prisma.$FollowersPayload<ExtArgs>
        fields: Prisma.FollowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          findFirst: {
            args: Prisma.FollowersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          findMany: {
            args: Prisma.FollowersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>[]
          }
          create: {
            args: Prisma.FollowersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          createMany: {
            args: Prisma.FollowersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>[]
          }
          delete: {
            args: Prisma.FollowersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          update: {
            args: Prisma.FollowersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          deleteMany: {
            args: Prisma.FollowersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>[]
          }
          upsert: {
            args: Prisma.FollowersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          aggregate: {
            args: Prisma.FollowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowers>
          }
          groupBy: {
            args: Prisma.FollowersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowersCountArgs<ExtArgs>
            result: $Utils.Optional<FollowersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    loginTokens?: LoginTokensOmit
    movies?: MoviesOmit
    categories?: CategoriesOmit
    moviesCategories?: MoviesCategoriesOmit
    featuredMovie?: FeaturedMovieOmit
    homepageSection?: HomepageSectionOmit
    reviews?: ReviewsOmit
    bookmarkedMovies?: BookmarkedMoviesOmit
    watchedMovies?: WatchedMoviesOmit
    followers?: FollowersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    tokens: number
    reviews: number
    bookmarks: number
    watchedMovies: number
    followers: number
    following: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UsersCountOutputTypeCountTokensArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    bookmarks?: boolean | UsersCountOutputTypeCountBookmarksArgs
    watchedMovies?: boolean | UsersCountOutputTypeCountWatchedMoviesArgs
    followers?: boolean | UsersCountOutputTypeCountFollowersArgs
    following?: boolean | UsersCountOutputTypeCountFollowingArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginTokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedMoviesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWatchedMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedMoviesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowersWhereInput
  }


  /**
   * Count Type MoviesCountOutputType
   */

  export type MoviesCountOutputType = {
    categories: number
    reviews: number
    bookmarks: number
    watchedMovies: number
  }

  export type MoviesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | MoviesCountOutputTypeCountCategoriesArgs
    reviews?: boolean | MoviesCountOutputTypeCountReviewsArgs
    bookmarks?: boolean | MoviesCountOutputTypeCountBookmarksArgs
    watchedMovies?: boolean | MoviesCountOutputTypeCountWatchedMoviesArgs
  }

  // Custom InputTypes
  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCountOutputType
     */
    select?: MoviesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesCategoriesWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedMoviesWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountWatchedMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedMoviesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    movies: number
    homepageSections: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | CategoriesCountOutputTypeCountMoviesArgs
    homepageSections?: boolean | CategoriesCountOutputTypeCountHomepageSectionsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesCategoriesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountHomepageSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomepageSectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password_hash: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    bookmarks?: boolean | Users$bookmarksArgs<ExtArgs>
    watchedMovies?: boolean | Users$watchedMoviesArgs<ExtArgs>
    followers?: boolean | Users$followersArgs<ExtArgs>
    following?: boolean | Users$followingArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | Users$tokensArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    bookmarks?: boolean | Users$bookmarksArgs<ExtArgs>
    watchedMovies?: boolean | Users$watchedMoviesArgs<ExtArgs>
    followers?: boolean | Users$followersArgs<ExtArgs>
    following?: boolean | Users$followingArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      tokens: Prisma.$LoginTokensPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkedMoviesPayload<ExtArgs>[]
      watchedMovies: Prisma.$WatchedMoviesPayload<ExtArgs>[]
      followers: Prisma.$FollowersPayload<ExtArgs>[]
      following: Prisma.$FollowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password_hash: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends Users$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Users$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends Users$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchedMovies<T extends Users$watchedMoviesArgs<ExtArgs> = {}>(args?: Subset<T, Users$watchedMoviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends Users$followersArgs<ExtArgs> = {}>(args?: Subset<T, Users$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends Users$followingArgs<ExtArgs> = {}>(args?: Subset<T, Users$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password_hash: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.tokens
   */
  export type Users$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    where?: LoginTokensWhereInput
    orderBy?: LoginTokensOrderByWithRelationInput | LoginTokensOrderByWithRelationInput[]
    cursor?: LoginTokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginTokensScalarFieldEnum | LoginTokensScalarFieldEnum[]
  }

  /**
   * Users.reviews
   */
  export type Users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users.bookmarks
   */
  export type Users$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    where?: BookmarkedMoviesWhereInput
    orderBy?: BookmarkedMoviesOrderByWithRelationInput | BookmarkedMoviesOrderByWithRelationInput[]
    cursor?: BookmarkedMoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkedMoviesScalarFieldEnum | BookmarkedMoviesScalarFieldEnum[]
  }

  /**
   * Users.watchedMovies
   */
  export type Users$watchedMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    where?: WatchedMoviesWhereInput
    orderBy?: WatchedMoviesOrderByWithRelationInput | WatchedMoviesOrderByWithRelationInput[]
    cursor?: WatchedMoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedMoviesScalarFieldEnum | WatchedMoviesScalarFieldEnum[]
  }

  /**
   * Users.followers
   */
  export type Users$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    where?: FollowersWhereInput
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    cursor?: FollowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * Users.following
   */
  export type Users$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    where?: FollowersWhereInput
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    cursor?: FollowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model LoginTokens
   */

  export type AggregateLoginTokens = {
    _count: LoginTokensCountAggregateOutputType | null
    _avg: LoginTokensAvgAggregateOutputType | null
    _sum: LoginTokensSumAggregateOutputType | null
    _min: LoginTokensMinAggregateOutputType | null
    _max: LoginTokensMaxAggregateOutputType | null
  }

  export type LoginTokensAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LoginTokensSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LoginTokensMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type LoginTokensMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type LoginTokensCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type LoginTokensAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LoginTokensSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LoginTokensMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type LoginTokensMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type LoginTokensCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type LoginTokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginTokens to aggregate.
     */
    where?: LoginTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokensOrderByWithRelationInput | LoginTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginTokens
    **/
    _count?: true | LoginTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginTokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginTokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginTokensMaxAggregateInputType
  }

  export type GetLoginTokensAggregateType<T extends LoginTokensAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginTokens[P]>
      : GetScalarType<T[P], AggregateLoginTokens[P]>
  }




  export type LoginTokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginTokensWhereInput
    orderBy?: LoginTokensOrderByWithAggregationInput | LoginTokensOrderByWithAggregationInput[]
    by: LoginTokensScalarFieldEnum[] | LoginTokensScalarFieldEnum
    having?: LoginTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginTokensCountAggregateInputType | true
    _avg?: LoginTokensAvgAggregateInputType
    _sum?: LoginTokensSumAggregateInputType
    _min?: LoginTokensMinAggregateInputType
    _max?: LoginTokensMaxAggregateInputType
  }

  export type LoginTokensGroupByOutputType = {
    id: number
    userId: number
    token: string
    createdAt: Date
    expiresAt: Date
    _count: LoginTokensCountAggregateOutputType | null
    _avg: LoginTokensAvgAggregateOutputType | null
    _sum: LoginTokensSumAggregateOutputType | null
    _min: LoginTokensMinAggregateOutputType | null
    _max: LoginTokensMaxAggregateOutputType | null
  }

  type GetLoginTokensGroupByPayload<T extends LoginTokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginTokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginTokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginTokensGroupByOutputType[P]>
            : GetScalarType<T[P], LoginTokensGroupByOutputType[P]>
        }
      >
    >


  export type LoginTokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginTokens"]>

  export type LoginTokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginTokens"]>

  export type LoginTokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginTokens"]>

  export type LoginTokensSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type LoginTokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "createdAt" | "expiresAt", ExtArgs["result"]["loginTokens"]>
  export type LoginTokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LoginTokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LoginTokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LoginTokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginTokens"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["loginTokens"]>
    composites: {}
  }

  type LoginTokensGetPayload<S extends boolean | null | undefined | LoginTokensDefaultArgs> = $Result.GetResult<Prisma.$LoginTokensPayload, S>

  type LoginTokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginTokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginTokensCountAggregateInputType | true
    }

  export interface LoginTokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginTokens'], meta: { name: 'LoginTokens' } }
    /**
     * Find zero or one LoginTokens that matches the filter.
     * @param {LoginTokensFindUniqueArgs} args - Arguments to find a LoginTokens
     * @example
     * // Get one LoginTokens
     * const loginTokens = await prisma.loginTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginTokensFindUniqueArgs>(args: SelectSubset<T, LoginTokensFindUniqueArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoginTokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginTokensFindUniqueOrThrowArgs} args - Arguments to find a LoginTokens
     * @example
     * // Get one LoginTokens
     * const loginTokens = await prisma.loginTokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginTokensFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokensFindFirstArgs} args - Arguments to find a LoginTokens
     * @example
     * // Get one LoginTokens
     * const loginTokens = await prisma.loginTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginTokensFindFirstArgs>(args?: SelectSubset<T, LoginTokensFindFirstArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginTokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokensFindFirstOrThrowArgs} args - Arguments to find a LoginTokens
     * @example
     * // Get one LoginTokens
     * const loginTokens = await prisma.loginTokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginTokensFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoginTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginTokens
     * const loginTokens = await prisma.loginTokens.findMany()
     * 
     * // Get first 10 LoginTokens
     * const loginTokens = await prisma.loginTokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginTokensWithIdOnly = await prisma.loginTokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginTokensFindManyArgs>(args?: SelectSubset<T, LoginTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoginTokens.
     * @param {LoginTokensCreateArgs} args - Arguments to create a LoginTokens.
     * @example
     * // Create one LoginTokens
     * const LoginTokens = await prisma.loginTokens.create({
     *   data: {
     *     // ... data to create a LoginTokens
     *   }
     * })
     * 
     */
    create<T extends LoginTokensCreateArgs>(args: SelectSubset<T, LoginTokensCreateArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoginTokens.
     * @param {LoginTokensCreateManyArgs} args - Arguments to create many LoginTokens.
     * @example
     * // Create many LoginTokens
     * const loginTokens = await prisma.loginTokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginTokensCreateManyArgs>(args?: SelectSubset<T, LoginTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginTokens and returns the data saved in the database.
     * @param {LoginTokensCreateManyAndReturnArgs} args - Arguments to create many LoginTokens.
     * @example
     * // Create many LoginTokens
     * const loginTokens = await prisma.loginTokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginTokens and only return the `id`
     * const loginTokensWithIdOnly = await prisma.loginTokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginTokensCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginTokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoginTokens.
     * @param {LoginTokensDeleteArgs} args - Arguments to delete one LoginTokens.
     * @example
     * // Delete one LoginTokens
     * const LoginTokens = await prisma.loginTokens.delete({
     *   where: {
     *     // ... filter to delete one LoginTokens
     *   }
     * })
     * 
     */
    delete<T extends LoginTokensDeleteArgs>(args: SelectSubset<T, LoginTokensDeleteArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoginTokens.
     * @param {LoginTokensUpdateArgs} args - Arguments to update one LoginTokens.
     * @example
     * // Update one LoginTokens
     * const loginTokens = await prisma.loginTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginTokensUpdateArgs>(args: SelectSubset<T, LoginTokensUpdateArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoginTokens.
     * @param {LoginTokensDeleteManyArgs} args - Arguments to filter LoginTokens to delete.
     * @example
     * // Delete a few LoginTokens
     * const { count } = await prisma.loginTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginTokensDeleteManyArgs>(args?: SelectSubset<T, LoginTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginTokens
     * const loginTokens = await prisma.loginTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginTokensUpdateManyArgs>(args: SelectSubset<T, LoginTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginTokens and returns the data updated in the database.
     * @param {LoginTokensUpdateManyAndReturnArgs} args - Arguments to update many LoginTokens.
     * @example
     * // Update many LoginTokens
     * const loginTokens = await prisma.loginTokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoginTokens and only return the `id`
     * const loginTokensWithIdOnly = await prisma.loginTokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoginTokensUpdateManyAndReturnArgs>(args: SelectSubset<T, LoginTokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoginTokens.
     * @param {LoginTokensUpsertArgs} args - Arguments to update or create a LoginTokens.
     * @example
     * // Update or create a LoginTokens
     * const loginTokens = await prisma.loginTokens.upsert({
     *   create: {
     *     // ... data to create a LoginTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginTokens we want to update
     *   }
     * })
     */
    upsert<T extends LoginTokensUpsertArgs>(args: SelectSubset<T, LoginTokensUpsertArgs<ExtArgs>>): Prisma__LoginTokensClient<$Result.GetResult<Prisma.$LoginTokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokensCountArgs} args - Arguments to filter LoginTokens to count.
     * @example
     * // Count the number of LoginTokens
     * const count = await prisma.loginTokens.count({
     *   where: {
     *     // ... the filter for the LoginTokens we want to count
     *   }
     * })
    **/
    count<T extends LoginTokensCountArgs>(
      args?: Subset<T, LoginTokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginTokensAggregateArgs>(args: Subset<T, LoginTokensAggregateArgs>): Prisma.PrismaPromise<GetLoginTokensAggregateType<T>>

    /**
     * Group by LoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginTokensGroupByArgs['orderBy'] }
        : { orderBy?: LoginTokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginTokens model
   */
  readonly fields: LoginTokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginTokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoginTokens model
   */
  interface LoginTokensFieldRefs {
    readonly id: FieldRef<"LoginTokens", 'Int'>
    readonly userId: FieldRef<"LoginTokens", 'Int'>
    readonly token: FieldRef<"LoginTokens", 'String'>
    readonly createdAt: FieldRef<"LoginTokens", 'DateTime'>
    readonly expiresAt: FieldRef<"LoginTokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginTokens findUnique
   */
  export type LoginTokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * Filter, which LoginTokens to fetch.
     */
    where: LoginTokensWhereUniqueInput
  }

  /**
   * LoginTokens findUniqueOrThrow
   */
  export type LoginTokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * Filter, which LoginTokens to fetch.
     */
    where: LoginTokensWhereUniqueInput
  }

  /**
   * LoginTokens findFirst
   */
  export type LoginTokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * Filter, which LoginTokens to fetch.
     */
    where?: LoginTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokensOrderByWithRelationInput | LoginTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginTokens.
     */
    cursor?: LoginTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginTokens.
     */
    distinct?: LoginTokensScalarFieldEnum | LoginTokensScalarFieldEnum[]
  }

  /**
   * LoginTokens findFirstOrThrow
   */
  export type LoginTokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * Filter, which LoginTokens to fetch.
     */
    where?: LoginTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokensOrderByWithRelationInput | LoginTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginTokens.
     */
    cursor?: LoginTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginTokens.
     */
    distinct?: LoginTokensScalarFieldEnum | LoginTokensScalarFieldEnum[]
  }

  /**
   * LoginTokens findMany
   */
  export type LoginTokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * Filter, which LoginTokens to fetch.
     */
    where?: LoginTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokensOrderByWithRelationInput | LoginTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginTokens.
     */
    cursor?: LoginTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    distinct?: LoginTokensScalarFieldEnum | LoginTokensScalarFieldEnum[]
  }

  /**
   * LoginTokens create
   */
  export type LoginTokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * The data needed to create a LoginTokens.
     */
    data: XOR<LoginTokensCreateInput, LoginTokensUncheckedCreateInput>
  }

  /**
   * LoginTokens createMany
   */
  export type LoginTokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginTokens.
     */
    data: LoginTokensCreateManyInput | LoginTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginTokens createManyAndReturn
   */
  export type LoginTokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * The data used to create many LoginTokens.
     */
    data: LoginTokensCreateManyInput | LoginTokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginTokens update
   */
  export type LoginTokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * The data needed to update a LoginTokens.
     */
    data: XOR<LoginTokensUpdateInput, LoginTokensUncheckedUpdateInput>
    /**
     * Choose, which LoginTokens to update.
     */
    where: LoginTokensWhereUniqueInput
  }

  /**
   * LoginTokens updateMany
   */
  export type LoginTokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginTokens.
     */
    data: XOR<LoginTokensUpdateManyMutationInput, LoginTokensUncheckedUpdateManyInput>
    /**
     * Filter which LoginTokens to update
     */
    where?: LoginTokensWhereInput
    /**
     * Limit how many LoginTokens to update.
     */
    limit?: number
  }

  /**
   * LoginTokens updateManyAndReturn
   */
  export type LoginTokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * The data used to update LoginTokens.
     */
    data: XOR<LoginTokensUpdateManyMutationInput, LoginTokensUncheckedUpdateManyInput>
    /**
     * Filter which LoginTokens to update
     */
    where?: LoginTokensWhereInput
    /**
     * Limit how many LoginTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginTokens upsert
   */
  export type LoginTokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * The filter to search for the LoginTokens to update in case it exists.
     */
    where: LoginTokensWhereUniqueInput
    /**
     * In case the LoginTokens found by the `where` argument doesn't exist, create a new LoginTokens with this data.
     */
    create: XOR<LoginTokensCreateInput, LoginTokensUncheckedCreateInput>
    /**
     * In case the LoginTokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginTokensUpdateInput, LoginTokensUncheckedUpdateInput>
  }

  /**
   * LoginTokens delete
   */
  export type LoginTokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
    /**
     * Filter which LoginTokens to delete.
     */
    where: LoginTokensWhereUniqueInput
  }

  /**
   * LoginTokens deleteMany
   */
  export type LoginTokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginTokens to delete
     */
    where?: LoginTokensWhereInput
    /**
     * Limit how many LoginTokens to delete.
     */
    limit?: number
  }

  /**
   * LoginTokens without action
   */
  export type LoginTokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginTokens
     */
    select?: LoginTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginTokens
     */
    omit?: LoginTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginTokensInclude<ExtArgs> | null
  }


  /**
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    id: number | null
    release_year: number | null
    duration: number | null
    rating: number | null
  }

  export type MoviesSumAggregateOutputType = {
    id: number | null
    release_year: number | null
    duration: number | null
    rating: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    release_year: number | null
    imageUrl: string | null
    posterUrl: string | null
    duration: number | null
    rating: number | null
    releaseDate: Date | null
    created_at: Date | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    release_year: number | null
    imageUrl: string | null
    posterUrl: string | null
    duration: number | null
    rating: number | null
    releaseDate: Date | null
    created_at: Date | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    release_year: number
    imageUrl: number
    posterUrl: number
    duration: number
    rating: number
    releaseDate: number
    created_at: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    id?: true
    release_year?: true
    duration?: true
    rating?: true
  }

  export type MoviesSumAggregateInputType = {
    id?: true
    release_year?: true
    duration?: true
    rating?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    release_year?: true
    imageUrl?: true
    posterUrl?: true
    duration?: true
    rating?: true
    releaseDate?: true
    created_at?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    release_year?: true
    imageUrl?: true
    posterUrl?: true
    duration?: true
    rating?: true
    releaseDate?: true
    created_at?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    release_year?: true
    imageUrl?: true
    posterUrl?: true
    duration?: true
    rating?: true
    releaseDate?: true
    created_at?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type MoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithAggregationInput | MoviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: MoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: number
    title: string
    description: string | null
    release_year: number
    imageUrl: string
    posterUrl: string | null
    duration: number
    rating: number
    releaseDate: Date
    created_at: Date
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    release_year?: boolean
    imageUrl?: boolean
    posterUrl?: boolean
    duration?: boolean
    rating?: boolean
    releaseDate?: boolean
    created_at?: boolean
    categories?: boolean | Movies$categoriesArgs<ExtArgs>
    reviews?: boolean | Movies$reviewsArgs<ExtArgs>
    bookmarks?: boolean | Movies$bookmarksArgs<ExtArgs>
    watchedMovies?: boolean | Movies$watchedMoviesArgs<ExtArgs>
    featuredMovie?: boolean | Movies$featuredMovieArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    release_year?: boolean
    imageUrl?: boolean
    posterUrl?: boolean
    duration?: boolean
    rating?: boolean
    releaseDate?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    release_year?: boolean
    imageUrl?: boolean
    posterUrl?: boolean
    duration?: boolean
    rating?: boolean
    releaseDate?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    release_year?: boolean
    imageUrl?: boolean
    posterUrl?: boolean
    duration?: boolean
    rating?: boolean
    releaseDate?: boolean
    created_at?: boolean
  }

  export type MoviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "release_year" | "imageUrl" | "posterUrl" | "duration" | "rating" | "releaseDate" | "created_at", ExtArgs["result"]["movies"]>
  export type MoviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Movies$categoriesArgs<ExtArgs>
    reviews?: boolean | Movies$reviewsArgs<ExtArgs>
    bookmarks?: boolean | Movies$bookmarksArgs<ExtArgs>
    watchedMovies?: boolean | Movies$watchedMoviesArgs<ExtArgs>
    featuredMovie?: boolean | Movies$featuredMovieArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MoviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movies"
    objects: {
      categories: Prisma.$MoviesCategoriesPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkedMoviesPayload<ExtArgs>[]
      watchedMovies: Prisma.$WatchedMoviesPayload<ExtArgs>[]
      featuredMovie: Prisma.$FeaturedMoviePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      release_year: number
      imageUrl: string
      posterUrl: string | null
      duration: number
      rating: number
      releaseDate: Date
      created_at: Date
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }

  type MoviesGetPayload<S extends boolean | null | undefined | MoviesDefaultArgs> = $Result.GetResult<Prisma.$MoviesPayload, S>

  type MoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface MoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movies'], meta: { name: 'Movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoviesFindUniqueArgs>(args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs>(args: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoviesFindFirstArgs>(args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs>(args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoviesFindManyArgs>(args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
     */
    create<T extends MoviesCreateArgs>(args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoviesCreateManyArgs>(args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MoviesCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoviesCreateManyAndReturnArgs>(args?: SelectSubset<T, MoviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
     */
    delete<T extends MoviesDeleteArgs>(args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoviesUpdateArgs>(args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoviesDeleteManyArgs>(args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoviesUpdateManyArgs>(args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MoviesUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoviesUpdateManyAndReturnArgs>(args: SelectSubset<T, MoviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     */
    upsert<T extends MoviesUpsertArgs>(args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movies model
   */
  readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Movies$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Movies$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Movies$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Movies$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends Movies$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Movies$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchedMovies<T extends Movies$watchedMoviesArgs<ExtArgs> = {}>(args?: Subset<T, Movies$watchedMoviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featuredMovie<T extends Movies$featuredMovieArgs<ExtArgs> = {}>(args?: Subset<T, Movies$featuredMovieArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movies model
   */
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", 'Int'>
    readonly title: FieldRef<"Movies", 'String'>
    readonly description: FieldRef<"Movies", 'String'>
    readonly release_year: FieldRef<"Movies", 'Int'>
    readonly imageUrl: FieldRef<"Movies", 'String'>
    readonly posterUrl: FieldRef<"Movies", 'String'>
    readonly duration: FieldRef<"Movies", 'Int'>
    readonly rating: FieldRef<"Movies", 'Float'>
    readonly releaseDate: FieldRef<"Movies", 'DateTime'>
    readonly created_at: FieldRef<"Movies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies create
   */
  export type MoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
  }

  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movies createManyAndReturn
   */
  export type MoviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movies update
   */
  export type MoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movies updateManyAndReturn
   */
  export type MoviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
  }

  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movies.categories
   */
  export type Movies$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    where?: MoviesCategoriesWhereInput
    orderBy?: MoviesCategoriesOrderByWithRelationInput | MoviesCategoriesOrderByWithRelationInput[]
    cursor?: MoviesCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesCategoriesScalarFieldEnum | MoviesCategoriesScalarFieldEnum[]
  }

  /**
   * Movies.reviews
   */
  export type Movies$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Movies.bookmarks
   */
  export type Movies$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    where?: BookmarkedMoviesWhereInput
    orderBy?: BookmarkedMoviesOrderByWithRelationInput | BookmarkedMoviesOrderByWithRelationInput[]
    cursor?: BookmarkedMoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkedMoviesScalarFieldEnum | BookmarkedMoviesScalarFieldEnum[]
  }

  /**
   * Movies.watchedMovies
   */
  export type Movies$watchedMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    where?: WatchedMoviesWhereInput
    orderBy?: WatchedMoviesOrderByWithRelationInput | WatchedMoviesOrderByWithRelationInput[]
    cursor?: WatchedMoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedMoviesScalarFieldEnum | WatchedMoviesScalarFieldEnum[]
  }

  /**
   * Movies.featuredMovie
   */
  export type Movies$featuredMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    where?: FeaturedMovieWhereInput
  }

  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    movies?: boolean | Categories$moviesArgs<ExtArgs>
    homepageSections?: boolean | Categories$homepageSectionsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Categories$moviesArgs<ExtArgs>
    homepageSections?: boolean | Categories$homepageSectionsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      movies: Prisma.$MoviesCategoriesPayload<ExtArgs>[]
      homepageSections: Prisma.$HomepageSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends Categories$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homepageSections<T extends Categories$homepageSectionsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$homepageSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.movies
   */
  export type Categories$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    where?: MoviesCategoriesWhereInput
    orderBy?: MoviesCategoriesOrderByWithRelationInput | MoviesCategoriesOrderByWithRelationInput[]
    cursor?: MoviesCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesCategoriesScalarFieldEnum | MoviesCategoriesScalarFieldEnum[]
  }

  /**
   * Categories.homepageSections
   */
  export type Categories$homepageSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    where?: HomepageSectionWhereInput
    orderBy?: HomepageSectionOrderByWithRelationInput | HomepageSectionOrderByWithRelationInput[]
    cursor?: HomepageSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomepageSectionScalarFieldEnum | HomepageSectionScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model MoviesCategories
   */

  export type AggregateMoviesCategories = {
    _count: MoviesCategoriesCountAggregateOutputType | null
    _avg: MoviesCategoriesAvgAggregateOutputType | null
    _sum: MoviesCategoriesSumAggregateOutputType | null
    _min: MoviesCategoriesMinAggregateOutputType | null
    _max: MoviesCategoriesMaxAggregateOutputType | null
  }

  export type MoviesCategoriesAvgAggregateOutputType = {
    movieId: number | null
    categoryId: number | null
  }

  export type MoviesCategoriesSumAggregateOutputType = {
    movieId: number | null
    categoryId: number | null
  }

  export type MoviesCategoriesMinAggregateOutputType = {
    movieId: number | null
    categoryId: number | null
  }

  export type MoviesCategoriesMaxAggregateOutputType = {
    movieId: number | null
    categoryId: number | null
  }

  export type MoviesCategoriesCountAggregateOutputType = {
    movieId: number
    categoryId: number
    _all: number
  }


  export type MoviesCategoriesAvgAggregateInputType = {
    movieId?: true
    categoryId?: true
  }

  export type MoviesCategoriesSumAggregateInputType = {
    movieId?: true
    categoryId?: true
  }

  export type MoviesCategoriesMinAggregateInputType = {
    movieId?: true
    categoryId?: true
  }

  export type MoviesCategoriesMaxAggregateInputType = {
    movieId?: true
    categoryId?: true
  }

  export type MoviesCategoriesCountAggregateInputType = {
    movieId?: true
    categoryId?: true
    _all?: true
  }

  export type MoviesCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoviesCategories to aggregate.
     */
    where?: MoviesCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviesCategories to fetch.
     */
    orderBy?: MoviesCategoriesOrderByWithRelationInput | MoviesCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoviesCategories
    **/
    _count?: true | MoviesCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesCategoriesMaxAggregateInputType
  }

  export type GetMoviesCategoriesAggregateType<T extends MoviesCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMoviesCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoviesCategories[P]>
      : GetScalarType<T[P], AggregateMoviesCategories[P]>
  }




  export type MoviesCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesCategoriesWhereInput
    orderBy?: MoviesCategoriesOrderByWithAggregationInput | MoviesCategoriesOrderByWithAggregationInput[]
    by: MoviesCategoriesScalarFieldEnum[] | MoviesCategoriesScalarFieldEnum
    having?: MoviesCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCategoriesCountAggregateInputType | true
    _avg?: MoviesCategoriesAvgAggregateInputType
    _sum?: MoviesCategoriesSumAggregateInputType
    _min?: MoviesCategoriesMinAggregateInputType
    _max?: MoviesCategoriesMaxAggregateInputType
  }

  export type MoviesCategoriesGroupByOutputType = {
    movieId: number
    categoryId: number
    _count: MoviesCategoriesCountAggregateOutputType | null
    _avg: MoviesCategoriesAvgAggregateOutputType | null
    _sum: MoviesCategoriesSumAggregateOutputType | null
    _min: MoviesCategoriesMinAggregateOutputType | null
    _max: MoviesCategoriesMaxAggregateOutputType | null
  }

  type GetMoviesCategoriesGroupByPayload<T extends MoviesCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    categoryId?: boolean
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moviesCategories"]>

  export type MoviesCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    categoryId?: boolean
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moviesCategories"]>

  export type MoviesCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    categoryId?: boolean
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moviesCategories"]>

  export type MoviesCategoriesSelectScalar = {
    movieId?: boolean
    categoryId?: boolean
  }

  export type MoviesCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movieId" | "categoryId", ExtArgs["result"]["moviesCategories"]>
  export type MoviesCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type MoviesCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type MoviesCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $MoviesCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoviesCategories"
    objects: {
      movie: Prisma.$MoviesPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: number
      categoryId: number
    }, ExtArgs["result"]["moviesCategories"]>
    composites: {}
  }

  type MoviesCategoriesGetPayload<S extends boolean | null | undefined | MoviesCategoriesDefaultArgs> = $Result.GetResult<Prisma.$MoviesCategoriesPayload, S>

  type MoviesCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoviesCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCategoriesCountAggregateInputType | true
    }

  export interface MoviesCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoviesCategories'], meta: { name: 'MoviesCategories' } }
    /**
     * Find zero or one MoviesCategories that matches the filter.
     * @param {MoviesCategoriesFindUniqueArgs} args - Arguments to find a MoviesCategories
     * @example
     * // Get one MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoviesCategoriesFindUniqueArgs>(args: SelectSubset<T, MoviesCategoriesFindUniqueArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoviesCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoviesCategoriesFindUniqueOrThrowArgs} args - Arguments to find a MoviesCategories
     * @example
     * // Get one MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoviesCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, MoviesCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoviesCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCategoriesFindFirstArgs} args - Arguments to find a MoviesCategories
     * @example
     * // Get one MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoviesCategoriesFindFirstArgs>(args?: SelectSubset<T, MoviesCategoriesFindFirstArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoviesCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCategoriesFindFirstOrThrowArgs} args - Arguments to find a MoviesCategories
     * @example
     * // Get one MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoviesCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, MoviesCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoviesCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.findMany()
     * 
     * // Get first 10 MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const moviesCategoriesWithMovieIdOnly = await prisma.moviesCategories.findMany({ select: { movieId: true } })
     * 
     */
    findMany<T extends MoviesCategoriesFindManyArgs>(args?: SelectSubset<T, MoviesCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoviesCategories.
     * @param {MoviesCategoriesCreateArgs} args - Arguments to create a MoviesCategories.
     * @example
     * // Create one MoviesCategories
     * const MoviesCategories = await prisma.moviesCategories.create({
     *   data: {
     *     // ... data to create a MoviesCategories
     *   }
     * })
     * 
     */
    create<T extends MoviesCategoriesCreateArgs>(args: SelectSubset<T, MoviesCategoriesCreateArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoviesCategories.
     * @param {MoviesCategoriesCreateManyArgs} args - Arguments to create many MoviesCategories.
     * @example
     * // Create many MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoviesCategoriesCreateManyArgs>(args?: SelectSubset<T, MoviesCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoviesCategories and returns the data saved in the database.
     * @param {MoviesCategoriesCreateManyAndReturnArgs} args - Arguments to create many MoviesCategories.
     * @example
     * // Create many MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoviesCategories and only return the `movieId`
     * const moviesCategoriesWithMovieIdOnly = await prisma.moviesCategories.createManyAndReturn({
     *   select: { movieId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoviesCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, MoviesCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoviesCategories.
     * @param {MoviesCategoriesDeleteArgs} args - Arguments to delete one MoviesCategories.
     * @example
     * // Delete one MoviesCategories
     * const MoviesCategories = await prisma.moviesCategories.delete({
     *   where: {
     *     // ... filter to delete one MoviesCategories
     *   }
     * })
     * 
     */
    delete<T extends MoviesCategoriesDeleteArgs>(args: SelectSubset<T, MoviesCategoriesDeleteArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoviesCategories.
     * @param {MoviesCategoriesUpdateArgs} args - Arguments to update one MoviesCategories.
     * @example
     * // Update one MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoviesCategoriesUpdateArgs>(args: SelectSubset<T, MoviesCategoriesUpdateArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoviesCategories.
     * @param {MoviesCategoriesDeleteManyArgs} args - Arguments to filter MoviesCategories to delete.
     * @example
     * // Delete a few MoviesCategories
     * const { count } = await prisma.moviesCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoviesCategoriesDeleteManyArgs>(args?: SelectSubset<T, MoviesCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoviesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoviesCategoriesUpdateManyArgs>(args: SelectSubset<T, MoviesCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoviesCategories and returns the data updated in the database.
     * @param {MoviesCategoriesUpdateManyAndReturnArgs} args - Arguments to update many MoviesCategories.
     * @example
     * // Update many MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoviesCategories and only return the `movieId`
     * const moviesCategoriesWithMovieIdOnly = await prisma.moviesCategories.updateManyAndReturn({
     *   select: { movieId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoviesCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, MoviesCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoviesCategories.
     * @param {MoviesCategoriesUpsertArgs} args - Arguments to update or create a MoviesCategories.
     * @example
     * // Update or create a MoviesCategories
     * const moviesCategories = await prisma.moviesCategories.upsert({
     *   create: {
     *     // ... data to create a MoviesCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoviesCategories we want to update
     *   }
     * })
     */
    upsert<T extends MoviesCategoriesUpsertArgs>(args: SelectSubset<T, MoviesCategoriesUpsertArgs<ExtArgs>>): Prisma__MoviesCategoriesClient<$Result.GetResult<Prisma.$MoviesCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoviesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCategoriesCountArgs} args - Arguments to filter MoviesCategories to count.
     * @example
     * // Count the number of MoviesCategories
     * const count = await prisma.moviesCategories.count({
     *   where: {
     *     // ... the filter for the MoviesCategories we want to count
     *   }
     * })
    **/
    count<T extends MoviesCategoriesCountArgs>(
      args?: Subset<T, MoviesCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoviesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoviesCategoriesAggregateArgs>(args: Subset<T, MoviesCategoriesAggregateArgs>): Prisma.PrismaPromise<GetMoviesCategoriesAggregateType<T>>

    /**
     * Group by MoviesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoviesCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoviesCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoviesCategories model
   */
  readonly fields: MoviesCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoviesCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoviesCategories model
   */
  interface MoviesCategoriesFieldRefs {
    readonly movieId: FieldRef<"MoviesCategories", 'Int'>
    readonly categoryId: FieldRef<"MoviesCategories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MoviesCategories findUnique
   */
  export type MoviesCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MoviesCategories to fetch.
     */
    where: MoviesCategoriesWhereUniqueInput
  }

  /**
   * MoviesCategories findUniqueOrThrow
   */
  export type MoviesCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MoviesCategories to fetch.
     */
    where: MoviesCategoriesWhereUniqueInput
  }

  /**
   * MoviesCategories findFirst
   */
  export type MoviesCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MoviesCategories to fetch.
     */
    where?: MoviesCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviesCategories to fetch.
     */
    orderBy?: MoviesCategoriesOrderByWithRelationInput | MoviesCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoviesCategories.
     */
    cursor?: MoviesCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoviesCategories.
     */
    distinct?: MoviesCategoriesScalarFieldEnum | MoviesCategoriesScalarFieldEnum[]
  }

  /**
   * MoviesCategories findFirstOrThrow
   */
  export type MoviesCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MoviesCategories to fetch.
     */
    where?: MoviesCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviesCategories to fetch.
     */
    orderBy?: MoviesCategoriesOrderByWithRelationInput | MoviesCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoviesCategories.
     */
    cursor?: MoviesCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoviesCategories.
     */
    distinct?: MoviesCategoriesScalarFieldEnum | MoviesCategoriesScalarFieldEnum[]
  }

  /**
   * MoviesCategories findMany
   */
  export type MoviesCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which MoviesCategories to fetch.
     */
    where?: MoviesCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviesCategories to fetch.
     */
    orderBy?: MoviesCategoriesOrderByWithRelationInput | MoviesCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoviesCategories.
     */
    cursor?: MoviesCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviesCategories.
     */
    skip?: number
    distinct?: MoviesCategoriesScalarFieldEnum | MoviesCategoriesScalarFieldEnum[]
  }

  /**
   * MoviesCategories create
   */
  export type MoviesCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a MoviesCategories.
     */
    data: XOR<MoviesCategoriesCreateInput, MoviesCategoriesUncheckedCreateInput>
  }

  /**
   * MoviesCategories createMany
   */
  export type MoviesCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoviesCategories.
     */
    data: MoviesCategoriesCreateManyInput | MoviesCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoviesCategories createManyAndReturn
   */
  export type MoviesCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many MoviesCategories.
     */
    data: MoviesCategoriesCreateManyInput | MoviesCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoviesCategories update
   */
  export type MoviesCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a MoviesCategories.
     */
    data: XOR<MoviesCategoriesUpdateInput, MoviesCategoriesUncheckedUpdateInput>
    /**
     * Choose, which MoviesCategories to update.
     */
    where: MoviesCategoriesWhereUniqueInput
  }

  /**
   * MoviesCategories updateMany
   */
  export type MoviesCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoviesCategories.
     */
    data: XOR<MoviesCategoriesUpdateManyMutationInput, MoviesCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which MoviesCategories to update
     */
    where?: MoviesCategoriesWhereInput
    /**
     * Limit how many MoviesCategories to update.
     */
    limit?: number
  }

  /**
   * MoviesCategories updateManyAndReturn
   */
  export type MoviesCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update MoviesCategories.
     */
    data: XOR<MoviesCategoriesUpdateManyMutationInput, MoviesCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which MoviesCategories to update
     */
    where?: MoviesCategoriesWhereInput
    /**
     * Limit how many MoviesCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoviesCategories upsert
   */
  export type MoviesCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the MoviesCategories to update in case it exists.
     */
    where: MoviesCategoriesWhereUniqueInput
    /**
     * In case the MoviesCategories found by the `where` argument doesn't exist, create a new MoviesCategories with this data.
     */
    create: XOR<MoviesCategoriesCreateInput, MoviesCategoriesUncheckedCreateInput>
    /**
     * In case the MoviesCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesCategoriesUpdateInput, MoviesCategoriesUncheckedUpdateInput>
  }

  /**
   * MoviesCategories delete
   */
  export type MoviesCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
    /**
     * Filter which MoviesCategories to delete.
     */
    where: MoviesCategoriesWhereUniqueInput
  }

  /**
   * MoviesCategories deleteMany
   */
  export type MoviesCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoviesCategories to delete
     */
    where?: MoviesCategoriesWhereInput
    /**
     * Limit how many MoviesCategories to delete.
     */
    limit?: number
  }

  /**
   * MoviesCategories without action
   */
  export type MoviesCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCategories
     */
    select?: MoviesCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviesCategories
     */
    omit?: MoviesCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model FeaturedMovie
   */

  export type AggregateFeaturedMovie = {
    _count: FeaturedMovieCountAggregateOutputType | null
    _avg: FeaturedMovieAvgAggregateOutputType | null
    _sum: FeaturedMovieSumAggregateOutputType | null
    _min: FeaturedMovieMinAggregateOutputType | null
    _max: FeaturedMovieMaxAggregateOutputType | null
  }

  export type FeaturedMovieAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type FeaturedMovieSumAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type FeaturedMovieMinAggregateOutputType = {
    id: number | null
    movieId: number | null
    updatedAt: Date | null
  }

  export type FeaturedMovieMaxAggregateOutputType = {
    id: number | null
    movieId: number | null
    updatedAt: Date | null
  }

  export type FeaturedMovieCountAggregateOutputType = {
    id: number
    movieId: number
    updatedAt: number
    _all: number
  }


  export type FeaturedMovieAvgAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type FeaturedMovieSumAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type FeaturedMovieMinAggregateInputType = {
    id?: true
    movieId?: true
    updatedAt?: true
  }

  export type FeaturedMovieMaxAggregateInputType = {
    id?: true
    movieId?: true
    updatedAt?: true
  }

  export type FeaturedMovieCountAggregateInputType = {
    id?: true
    movieId?: true
    updatedAt?: true
    _all?: true
  }

  export type FeaturedMovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedMovie to aggregate.
     */
    where?: FeaturedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedMovies to fetch.
     */
    orderBy?: FeaturedMovieOrderByWithRelationInput | FeaturedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeaturedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeaturedMovies
    **/
    _count?: true | FeaturedMovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeaturedMovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeaturedMovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedMovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedMovieMaxAggregateInputType
  }

  export type GetFeaturedMovieAggregateType<T extends FeaturedMovieAggregateArgs> = {
        [P in keyof T & keyof AggregateFeaturedMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeaturedMovie[P]>
      : GetScalarType<T[P], AggregateFeaturedMovie[P]>
  }




  export type FeaturedMovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedMovieWhereInput
    orderBy?: FeaturedMovieOrderByWithAggregationInput | FeaturedMovieOrderByWithAggregationInput[]
    by: FeaturedMovieScalarFieldEnum[] | FeaturedMovieScalarFieldEnum
    having?: FeaturedMovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturedMovieCountAggregateInputType | true
    _avg?: FeaturedMovieAvgAggregateInputType
    _sum?: FeaturedMovieSumAggregateInputType
    _min?: FeaturedMovieMinAggregateInputType
    _max?: FeaturedMovieMaxAggregateInputType
  }

  export type FeaturedMovieGroupByOutputType = {
    id: number
    movieId: number
    updatedAt: Date
    _count: FeaturedMovieCountAggregateOutputType | null
    _avg: FeaturedMovieAvgAggregateOutputType | null
    _sum: FeaturedMovieSumAggregateOutputType | null
    _min: FeaturedMovieMinAggregateOutputType | null
    _max: FeaturedMovieMaxAggregateOutputType | null
  }

  type GetFeaturedMovieGroupByPayload<T extends FeaturedMovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturedMovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturedMovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturedMovieGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturedMovieGroupByOutputType[P]>
        }
      >
    >


  export type FeaturedMovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    updatedAt?: boolean
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredMovie"]>

  export type FeaturedMovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    updatedAt?: boolean
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredMovie"]>

  export type FeaturedMovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    updatedAt?: boolean
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredMovie"]>

  export type FeaturedMovieSelectScalar = {
    id?: boolean
    movieId?: boolean
    updatedAt?: boolean
  }

  export type FeaturedMovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieId" | "updatedAt", ExtArgs["result"]["featuredMovie"]>
  export type FeaturedMovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type FeaturedMovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type FeaturedMovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $FeaturedMoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeaturedMovie"
    objects: {
      movie: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieId: number
      updatedAt: Date
    }, ExtArgs["result"]["featuredMovie"]>
    composites: {}
  }

  type FeaturedMovieGetPayload<S extends boolean | null | undefined | FeaturedMovieDefaultArgs> = $Result.GetResult<Prisma.$FeaturedMoviePayload, S>

  type FeaturedMovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeaturedMovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturedMovieCountAggregateInputType | true
    }

  export interface FeaturedMovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeaturedMovie'], meta: { name: 'FeaturedMovie' } }
    /**
     * Find zero or one FeaturedMovie that matches the filter.
     * @param {FeaturedMovieFindUniqueArgs} args - Arguments to find a FeaturedMovie
     * @example
     * // Get one FeaturedMovie
     * const featuredMovie = await prisma.featuredMovie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedMovieFindUniqueArgs>(args: SelectSubset<T, FeaturedMovieFindUniqueArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeaturedMovie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedMovieFindUniqueOrThrowArgs} args - Arguments to find a FeaturedMovie
     * @example
     * // Get one FeaturedMovie
     * const featuredMovie = await prisma.featuredMovie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedMovieFindUniqueOrThrowArgs>(args: SelectSubset<T, FeaturedMovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedMovie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedMovieFindFirstArgs} args - Arguments to find a FeaturedMovie
     * @example
     * // Get one FeaturedMovie
     * const featuredMovie = await prisma.featuredMovie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedMovieFindFirstArgs>(args?: SelectSubset<T, FeaturedMovieFindFirstArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedMovie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedMovieFindFirstOrThrowArgs} args - Arguments to find a FeaturedMovie
     * @example
     * // Get one FeaturedMovie
     * const featuredMovie = await prisma.featuredMovie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedMovieFindFirstOrThrowArgs>(args?: SelectSubset<T, FeaturedMovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeaturedMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedMovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeaturedMovies
     * const featuredMovies = await prisma.featuredMovie.findMany()
     * 
     * // Get first 10 FeaturedMovies
     * const featuredMovies = await prisma.featuredMovie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featuredMovieWithIdOnly = await prisma.featuredMovie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeaturedMovieFindManyArgs>(args?: SelectSubset<T, FeaturedMovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeaturedMovie.
     * @param {FeaturedMovieCreateArgs} args - Arguments to create a FeaturedMovie.
     * @example
     * // Create one FeaturedMovie
     * const FeaturedMovie = await prisma.featuredMovie.create({
     *   data: {
     *     // ... data to create a FeaturedMovie
     *   }
     * })
     * 
     */
    create<T extends FeaturedMovieCreateArgs>(args: SelectSubset<T, FeaturedMovieCreateArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeaturedMovies.
     * @param {FeaturedMovieCreateManyArgs} args - Arguments to create many FeaturedMovies.
     * @example
     * // Create many FeaturedMovies
     * const featuredMovie = await prisma.featuredMovie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeaturedMovieCreateManyArgs>(args?: SelectSubset<T, FeaturedMovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeaturedMovies and returns the data saved in the database.
     * @param {FeaturedMovieCreateManyAndReturnArgs} args - Arguments to create many FeaturedMovies.
     * @example
     * // Create many FeaturedMovies
     * const featuredMovie = await prisma.featuredMovie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeaturedMovies and only return the `id`
     * const featuredMovieWithIdOnly = await prisma.featuredMovie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeaturedMovieCreateManyAndReturnArgs>(args?: SelectSubset<T, FeaturedMovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeaturedMovie.
     * @param {FeaturedMovieDeleteArgs} args - Arguments to delete one FeaturedMovie.
     * @example
     * // Delete one FeaturedMovie
     * const FeaturedMovie = await prisma.featuredMovie.delete({
     *   where: {
     *     // ... filter to delete one FeaturedMovie
     *   }
     * })
     * 
     */
    delete<T extends FeaturedMovieDeleteArgs>(args: SelectSubset<T, FeaturedMovieDeleteArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeaturedMovie.
     * @param {FeaturedMovieUpdateArgs} args - Arguments to update one FeaturedMovie.
     * @example
     * // Update one FeaturedMovie
     * const featuredMovie = await prisma.featuredMovie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeaturedMovieUpdateArgs>(args: SelectSubset<T, FeaturedMovieUpdateArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeaturedMovies.
     * @param {FeaturedMovieDeleteManyArgs} args - Arguments to filter FeaturedMovies to delete.
     * @example
     * // Delete a few FeaturedMovies
     * const { count } = await prisma.featuredMovie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeaturedMovieDeleteManyArgs>(args?: SelectSubset<T, FeaturedMovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedMovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeaturedMovies
     * const featuredMovie = await prisma.featuredMovie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeaturedMovieUpdateManyArgs>(args: SelectSubset<T, FeaturedMovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedMovies and returns the data updated in the database.
     * @param {FeaturedMovieUpdateManyAndReturnArgs} args - Arguments to update many FeaturedMovies.
     * @example
     * // Update many FeaturedMovies
     * const featuredMovie = await prisma.featuredMovie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeaturedMovies and only return the `id`
     * const featuredMovieWithIdOnly = await prisma.featuredMovie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeaturedMovieUpdateManyAndReturnArgs>(args: SelectSubset<T, FeaturedMovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeaturedMovie.
     * @param {FeaturedMovieUpsertArgs} args - Arguments to update or create a FeaturedMovie.
     * @example
     * // Update or create a FeaturedMovie
     * const featuredMovie = await prisma.featuredMovie.upsert({
     *   create: {
     *     // ... data to create a FeaturedMovie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeaturedMovie we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedMovieUpsertArgs>(args: SelectSubset<T, FeaturedMovieUpsertArgs<ExtArgs>>): Prisma__FeaturedMovieClient<$Result.GetResult<Prisma.$FeaturedMoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeaturedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedMovieCountArgs} args - Arguments to filter FeaturedMovies to count.
     * @example
     * // Count the number of FeaturedMovies
     * const count = await prisma.featuredMovie.count({
     *   where: {
     *     // ... the filter for the FeaturedMovies we want to count
     *   }
     * })
    **/
    count<T extends FeaturedMovieCountArgs>(
      args?: Subset<T, FeaturedMovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturedMovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeaturedMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedMovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeaturedMovieAggregateArgs>(args: Subset<T, FeaturedMovieAggregateArgs>): Prisma.PrismaPromise<GetFeaturedMovieAggregateType<T>>

    /**
     * Group by FeaturedMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedMovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeaturedMovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeaturedMovieGroupByArgs['orderBy'] }
        : { orderBy?: FeaturedMovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeaturedMovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeaturedMovie model
   */
  readonly fields: FeaturedMovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeaturedMovie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeaturedMovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeaturedMovie model
   */
  interface FeaturedMovieFieldRefs {
    readonly id: FieldRef<"FeaturedMovie", 'Int'>
    readonly movieId: FieldRef<"FeaturedMovie", 'Int'>
    readonly updatedAt: FieldRef<"FeaturedMovie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeaturedMovie findUnique
   */
  export type FeaturedMovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedMovie to fetch.
     */
    where: FeaturedMovieWhereUniqueInput
  }

  /**
   * FeaturedMovie findUniqueOrThrow
   */
  export type FeaturedMovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedMovie to fetch.
     */
    where: FeaturedMovieWhereUniqueInput
  }

  /**
   * FeaturedMovie findFirst
   */
  export type FeaturedMovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedMovie to fetch.
     */
    where?: FeaturedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedMovies to fetch.
     */
    orderBy?: FeaturedMovieOrderByWithRelationInput | FeaturedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedMovies.
     */
    cursor?: FeaturedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedMovies.
     */
    distinct?: FeaturedMovieScalarFieldEnum | FeaturedMovieScalarFieldEnum[]
  }

  /**
   * FeaturedMovie findFirstOrThrow
   */
  export type FeaturedMovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedMovie to fetch.
     */
    where?: FeaturedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedMovies to fetch.
     */
    orderBy?: FeaturedMovieOrderByWithRelationInput | FeaturedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedMovies.
     */
    cursor?: FeaturedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedMovies.
     */
    distinct?: FeaturedMovieScalarFieldEnum | FeaturedMovieScalarFieldEnum[]
  }

  /**
   * FeaturedMovie findMany
   */
  export type FeaturedMovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedMovies to fetch.
     */
    where?: FeaturedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedMovies to fetch.
     */
    orderBy?: FeaturedMovieOrderByWithRelationInput | FeaturedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeaturedMovies.
     */
    cursor?: FeaturedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedMovies.
     */
    skip?: number
    distinct?: FeaturedMovieScalarFieldEnum | FeaturedMovieScalarFieldEnum[]
  }

  /**
   * FeaturedMovie create
   */
  export type FeaturedMovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * The data needed to create a FeaturedMovie.
     */
    data: XOR<FeaturedMovieCreateInput, FeaturedMovieUncheckedCreateInput>
  }

  /**
   * FeaturedMovie createMany
   */
  export type FeaturedMovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeaturedMovies.
     */
    data: FeaturedMovieCreateManyInput | FeaturedMovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeaturedMovie createManyAndReturn
   */
  export type FeaturedMovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * The data used to create many FeaturedMovies.
     */
    data: FeaturedMovieCreateManyInput | FeaturedMovieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeaturedMovie update
   */
  export type FeaturedMovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * The data needed to update a FeaturedMovie.
     */
    data: XOR<FeaturedMovieUpdateInput, FeaturedMovieUncheckedUpdateInput>
    /**
     * Choose, which FeaturedMovie to update.
     */
    where: FeaturedMovieWhereUniqueInput
  }

  /**
   * FeaturedMovie updateMany
   */
  export type FeaturedMovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeaturedMovies.
     */
    data: XOR<FeaturedMovieUpdateManyMutationInput, FeaturedMovieUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedMovies to update
     */
    where?: FeaturedMovieWhereInput
    /**
     * Limit how many FeaturedMovies to update.
     */
    limit?: number
  }

  /**
   * FeaturedMovie updateManyAndReturn
   */
  export type FeaturedMovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * The data used to update FeaturedMovies.
     */
    data: XOR<FeaturedMovieUpdateManyMutationInput, FeaturedMovieUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedMovies to update
     */
    where?: FeaturedMovieWhereInput
    /**
     * Limit how many FeaturedMovies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeaturedMovie upsert
   */
  export type FeaturedMovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * The filter to search for the FeaturedMovie to update in case it exists.
     */
    where: FeaturedMovieWhereUniqueInput
    /**
     * In case the FeaturedMovie found by the `where` argument doesn't exist, create a new FeaturedMovie with this data.
     */
    create: XOR<FeaturedMovieCreateInput, FeaturedMovieUncheckedCreateInput>
    /**
     * In case the FeaturedMovie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeaturedMovieUpdateInput, FeaturedMovieUncheckedUpdateInput>
  }

  /**
   * FeaturedMovie delete
   */
  export type FeaturedMovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
    /**
     * Filter which FeaturedMovie to delete.
     */
    where: FeaturedMovieWhereUniqueInput
  }

  /**
   * FeaturedMovie deleteMany
   */
  export type FeaturedMovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedMovies to delete
     */
    where?: FeaturedMovieWhereInput
    /**
     * Limit how many FeaturedMovies to delete.
     */
    limit?: number
  }

  /**
   * FeaturedMovie without action
   */
  export type FeaturedMovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedMovie
     */
    select?: FeaturedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedMovie
     */
    omit?: FeaturedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedMovieInclude<ExtArgs> | null
  }


  /**
   * Model HomepageSection
   */

  export type AggregateHomepageSection = {
    _count: HomepageSectionCountAggregateOutputType | null
    _avg: HomepageSectionAvgAggregateOutputType | null
    _sum: HomepageSectionSumAggregateOutputType | null
    _min: HomepageSectionMinAggregateOutputType | null
    _max: HomepageSectionMaxAggregateOutputType | null
  }

  export type HomepageSectionAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sortOrder: number | null
    movieLimit: number | null
  }

  export type HomepageSectionSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    sortOrder: number | null
    movieLimit: number | null
  }

  export type HomepageSectionMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    title: string | null
    sortOrder: number | null
    movieLimit: number | null
  }

  export type HomepageSectionMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    title: string | null
    sortOrder: number | null
    movieLimit: number | null
  }

  export type HomepageSectionCountAggregateOutputType = {
    id: number
    categoryId: number
    title: number
    sortOrder: number
    movieLimit: number
    _all: number
  }


  export type HomepageSectionAvgAggregateInputType = {
    id?: true
    categoryId?: true
    sortOrder?: true
    movieLimit?: true
  }

  export type HomepageSectionSumAggregateInputType = {
    id?: true
    categoryId?: true
    sortOrder?: true
    movieLimit?: true
  }

  export type HomepageSectionMinAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    sortOrder?: true
    movieLimit?: true
  }

  export type HomepageSectionMaxAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    sortOrder?: true
    movieLimit?: true
  }

  export type HomepageSectionCountAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    sortOrder?: true
    movieLimit?: true
    _all?: true
  }

  export type HomepageSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomepageSection to aggregate.
     */
    where?: HomepageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageSections to fetch.
     */
    orderBy?: HomepageSectionOrderByWithRelationInput | HomepageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomepageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomepageSections
    **/
    _count?: true | HomepageSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomepageSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomepageSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomepageSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomepageSectionMaxAggregateInputType
  }

  export type GetHomepageSectionAggregateType<T extends HomepageSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateHomepageSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomepageSection[P]>
      : GetScalarType<T[P], AggregateHomepageSection[P]>
  }




  export type HomepageSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomepageSectionWhereInput
    orderBy?: HomepageSectionOrderByWithAggregationInput | HomepageSectionOrderByWithAggregationInput[]
    by: HomepageSectionScalarFieldEnum[] | HomepageSectionScalarFieldEnum
    having?: HomepageSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomepageSectionCountAggregateInputType | true
    _avg?: HomepageSectionAvgAggregateInputType
    _sum?: HomepageSectionSumAggregateInputType
    _min?: HomepageSectionMinAggregateInputType
    _max?: HomepageSectionMaxAggregateInputType
  }

  export type HomepageSectionGroupByOutputType = {
    id: number
    categoryId: number
    title: string
    sortOrder: number
    movieLimit: number
    _count: HomepageSectionCountAggregateOutputType | null
    _avg: HomepageSectionAvgAggregateOutputType | null
    _sum: HomepageSectionSumAggregateOutputType | null
    _min: HomepageSectionMinAggregateOutputType | null
    _max: HomepageSectionMaxAggregateOutputType | null
  }

  type GetHomepageSectionGroupByPayload<T extends HomepageSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomepageSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomepageSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomepageSectionGroupByOutputType[P]>
            : GetScalarType<T[P], HomepageSectionGroupByOutputType[P]>
        }
      >
    >


  export type HomepageSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    sortOrder?: boolean
    movieLimit?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homepageSection"]>

  export type HomepageSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    sortOrder?: boolean
    movieLimit?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homepageSection"]>

  export type HomepageSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    sortOrder?: boolean
    movieLimit?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homepageSection"]>

  export type HomepageSectionSelectScalar = {
    id?: boolean
    categoryId?: boolean
    title?: boolean
    sortOrder?: boolean
    movieLimit?: boolean
  }

  export type HomepageSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "title" | "sortOrder" | "movieLimit", ExtArgs["result"]["homepageSection"]>
  export type HomepageSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type HomepageSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type HomepageSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $HomepageSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomepageSection"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      title: string
      sortOrder: number
      movieLimit: number
    }, ExtArgs["result"]["homepageSection"]>
    composites: {}
  }

  type HomepageSectionGetPayload<S extends boolean | null | undefined | HomepageSectionDefaultArgs> = $Result.GetResult<Prisma.$HomepageSectionPayload, S>

  type HomepageSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomepageSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomepageSectionCountAggregateInputType | true
    }

  export interface HomepageSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomepageSection'], meta: { name: 'HomepageSection' } }
    /**
     * Find zero or one HomepageSection that matches the filter.
     * @param {HomepageSectionFindUniqueArgs} args - Arguments to find a HomepageSection
     * @example
     * // Get one HomepageSection
     * const homepageSection = await prisma.homepageSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomepageSectionFindUniqueArgs>(args: SelectSubset<T, HomepageSectionFindUniqueArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomepageSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomepageSectionFindUniqueOrThrowArgs} args - Arguments to find a HomepageSection
     * @example
     * // Get one HomepageSection
     * const homepageSection = await prisma.homepageSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomepageSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, HomepageSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomepageSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageSectionFindFirstArgs} args - Arguments to find a HomepageSection
     * @example
     * // Get one HomepageSection
     * const homepageSection = await prisma.homepageSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomepageSectionFindFirstArgs>(args?: SelectSubset<T, HomepageSectionFindFirstArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomepageSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageSectionFindFirstOrThrowArgs} args - Arguments to find a HomepageSection
     * @example
     * // Get one HomepageSection
     * const homepageSection = await prisma.homepageSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomepageSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, HomepageSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomepageSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomepageSections
     * const homepageSections = await prisma.homepageSection.findMany()
     * 
     * // Get first 10 HomepageSections
     * const homepageSections = await prisma.homepageSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homepageSectionWithIdOnly = await prisma.homepageSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomepageSectionFindManyArgs>(args?: SelectSubset<T, HomepageSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomepageSection.
     * @param {HomepageSectionCreateArgs} args - Arguments to create a HomepageSection.
     * @example
     * // Create one HomepageSection
     * const HomepageSection = await prisma.homepageSection.create({
     *   data: {
     *     // ... data to create a HomepageSection
     *   }
     * })
     * 
     */
    create<T extends HomepageSectionCreateArgs>(args: SelectSubset<T, HomepageSectionCreateArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomepageSections.
     * @param {HomepageSectionCreateManyArgs} args - Arguments to create many HomepageSections.
     * @example
     * // Create many HomepageSections
     * const homepageSection = await prisma.homepageSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomepageSectionCreateManyArgs>(args?: SelectSubset<T, HomepageSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomepageSections and returns the data saved in the database.
     * @param {HomepageSectionCreateManyAndReturnArgs} args - Arguments to create many HomepageSections.
     * @example
     * // Create many HomepageSections
     * const homepageSection = await prisma.homepageSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomepageSections and only return the `id`
     * const homepageSectionWithIdOnly = await prisma.homepageSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomepageSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, HomepageSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomepageSection.
     * @param {HomepageSectionDeleteArgs} args - Arguments to delete one HomepageSection.
     * @example
     * // Delete one HomepageSection
     * const HomepageSection = await prisma.homepageSection.delete({
     *   where: {
     *     // ... filter to delete one HomepageSection
     *   }
     * })
     * 
     */
    delete<T extends HomepageSectionDeleteArgs>(args: SelectSubset<T, HomepageSectionDeleteArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomepageSection.
     * @param {HomepageSectionUpdateArgs} args - Arguments to update one HomepageSection.
     * @example
     * // Update one HomepageSection
     * const homepageSection = await prisma.homepageSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomepageSectionUpdateArgs>(args: SelectSubset<T, HomepageSectionUpdateArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomepageSections.
     * @param {HomepageSectionDeleteManyArgs} args - Arguments to filter HomepageSections to delete.
     * @example
     * // Delete a few HomepageSections
     * const { count } = await prisma.homepageSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomepageSectionDeleteManyArgs>(args?: SelectSubset<T, HomepageSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomepageSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomepageSections
     * const homepageSection = await prisma.homepageSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomepageSectionUpdateManyArgs>(args: SelectSubset<T, HomepageSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomepageSections and returns the data updated in the database.
     * @param {HomepageSectionUpdateManyAndReturnArgs} args - Arguments to update many HomepageSections.
     * @example
     * // Update many HomepageSections
     * const homepageSection = await prisma.homepageSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomepageSections and only return the `id`
     * const homepageSectionWithIdOnly = await prisma.homepageSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomepageSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, HomepageSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomepageSection.
     * @param {HomepageSectionUpsertArgs} args - Arguments to update or create a HomepageSection.
     * @example
     * // Update or create a HomepageSection
     * const homepageSection = await prisma.homepageSection.upsert({
     *   create: {
     *     // ... data to create a HomepageSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomepageSection we want to update
     *   }
     * })
     */
    upsert<T extends HomepageSectionUpsertArgs>(args: SelectSubset<T, HomepageSectionUpsertArgs<ExtArgs>>): Prisma__HomepageSectionClient<$Result.GetResult<Prisma.$HomepageSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomepageSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageSectionCountArgs} args - Arguments to filter HomepageSections to count.
     * @example
     * // Count the number of HomepageSections
     * const count = await prisma.homepageSection.count({
     *   where: {
     *     // ... the filter for the HomepageSections we want to count
     *   }
     * })
    **/
    count<T extends HomepageSectionCountArgs>(
      args?: Subset<T, HomepageSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomepageSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomepageSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomepageSectionAggregateArgs>(args: Subset<T, HomepageSectionAggregateArgs>): Prisma.PrismaPromise<GetHomepageSectionAggregateType<T>>

    /**
     * Group by HomepageSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomepageSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomepageSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomepageSectionGroupByArgs['orderBy'] }
        : { orderBy?: HomepageSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomepageSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomepageSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomepageSection model
   */
  readonly fields: HomepageSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomepageSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomepageSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomepageSection model
   */
  interface HomepageSectionFieldRefs {
    readonly id: FieldRef<"HomepageSection", 'Int'>
    readonly categoryId: FieldRef<"HomepageSection", 'Int'>
    readonly title: FieldRef<"HomepageSection", 'String'>
    readonly sortOrder: FieldRef<"HomepageSection", 'Int'>
    readonly movieLimit: FieldRef<"HomepageSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HomepageSection findUnique
   */
  export type HomepageSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * Filter, which HomepageSection to fetch.
     */
    where: HomepageSectionWhereUniqueInput
  }

  /**
   * HomepageSection findUniqueOrThrow
   */
  export type HomepageSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * Filter, which HomepageSection to fetch.
     */
    where: HomepageSectionWhereUniqueInput
  }

  /**
   * HomepageSection findFirst
   */
  export type HomepageSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * Filter, which HomepageSection to fetch.
     */
    where?: HomepageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageSections to fetch.
     */
    orderBy?: HomepageSectionOrderByWithRelationInput | HomepageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomepageSections.
     */
    cursor?: HomepageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomepageSections.
     */
    distinct?: HomepageSectionScalarFieldEnum | HomepageSectionScalarFieldEnum[]
  }

  /**
   * HomepageSection findFirstOrThrow
   */
  export type HomepageSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * Filter, which HomepageSection to fetch.
     */
    where?: HomepageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageSections to fetch.
     */
    orderBy?: HomepageSectionOrderByWithRelationInput | HomepageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomepageSections.
     */
    cursor?: HomepageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomepageSections.
     */
    distinct?: HomepageSectionScalarFieldEnum | HomepageSectionScalarFieldEnum[]
  }

  /**
   * HomepageSection findMany
   */
  export type HomepageSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * Filter, which HomepageSections to fetch.
     */
    where?: HomepageSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomepageSections to fetch.
     */
    orderBy?: HomepageSectionOrderByWithRelationInput | HomepageSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomepageSections.
     */
    cursor?: HomepageSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomepageSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomepageSections.
     */
    skip?: number
    distinct?: HomepageSectionScalarFieldEnum | HomepageSectionScalarFieldEnum[]
  }

  /**
   * HomepageSection create
   */
  export type HomepageSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a HomepageSection.
     */
    data: XOR<HomepageSectionCreateInput, HomepageSectionUncheckedCreateInput>
  }

  /**
   * HomepageSection createMany
   */
  export type HomepageSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomepageSections.
     */
    data: HomepageSectionCreateManyInput | HomepageSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomepageSection createManyAndReturn
   */
  export type HomepageSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * The data used to create many HomepageSections.
     */
    data: HomepageSectionCreateManyInput | HomepageSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HomepageSection update
   */
  export type HomepageSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a HomepageSection.
     */
    data: XOR<HomepageSectionUpdateInput, HomepageSectionUncheckedUpdateInput>
    /**
     * Choose, which HomepageSection to update.
     */
    where: HomepageSectionWhereUniqueInput
  }

  /**
   * HomepageSection updateMany
   */
  export type HomepageSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomepageSections.
     */
    data: XOR<HomepageSectionUpdateManyMutationInput, HomepageSectionUncheckedUpdateManyInput>
    /**
     * Filter which HomepageSections to update
     */
    where?: HomepageSectionWhereInput
    /**
     * Limit how many HomepageSections to update.
     */
    limit?: number
  }

  /**
   * HomepageSection updateManyAndReturn
   */
  export type HomepageSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * The data used to update HomepageSections.
     */
    data: XOR<HomepageSectionUpdateManyMutationInput, HomepageSectionUncheckedUpdateManyInput>
    /**
     * Filter which HomepageSections to update
     */
    where?: HomepageSectionWhereInput
    /**
     * Limit how many HomepageSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HomepageSection upsert
   */
  export type HomepageSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the HomepageSection to update in case it exists.
     */
    where: HomepageSectionWhereUniqueInput
    /**
     * In case the HomepageSection found by the `where` argument doesn't exist, create a new HomepageSection with this data.
     */
    create: XOR<HomepageSectionCreateInput, HomepageSectionUncheckedCreateInput>
    /**
     * In case the HomepageSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomepageSectionUpdateInput, HomepageSectionUncheckedUpdateInput>
  }

  /**
   * HomepageSection delete
   */
  export type HomepageSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
    /**
     * Filter which HomepageSection to delete.
     */
    where: HomepageSectionWhereUniqueInput
  }

  /**
   * HomepageSection deleteMany
   */
  export type HomepageSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomepageSections to delete
     */
    where?: HomepageSectionWhereInput
    /**
     * Limit how many HomepageSections to delete.
     */
    limit?: number
  }

  /**
   * HomepageSection without action
   */
  export type HomepageSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomepageSection
     */
    select?: HomepageSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomepageSection
     */
    omit?: HomepageSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomepageSectionInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    movieId: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    movieId: number
    userId: number
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    movieId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieId" | "userId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      movie: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieId: number
      userId: number
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly movieId: FieldRef<"Reviews", 'Int'>
    readonly userId: FieldRef<"Reviews", 'Int'>
    readonly rating: FieldRef<"Reviews", 'Float'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly createdAt: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model BookmarkedMovies
   */

  export type AggregateBookmarkedMovies = {
    _count: BookmarkedMoviesCountAggregateOutputType | null
    _avg: BookmarkedMoviesAvgAggregateOutputType | null
    _sum: BookmarkedMoviesSumAggregateOutputType | null
    _min: BookmarkedMoviesMinAggregateOutputType | null
    _max: BookmarkedMoviesMaxAggregateOutputType | null
  }

  export type BookmarkedMoviesAvgAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type BookmarkedMoviesSumAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type BookmarkedMoviesMinAggregateOutputType = {
    userId: number | null
    movieId: number | null
    bookmarkedAt: Date | null
  }

  export type BookmarkedMoviesMaxAggregateOutputType = {
    userId: number | null
    movieId: number | null
    bookmarkedAt: Date | null
  }

  export type BookmarkedMoviesCountAggregateOutputType = {
    userId: number
    movieId: number
    bookmarkedAt: number
    _all: number
  }


  export type BookmarkedMoviesAvgAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type BookmarkedMoviesSumAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type BookmarkedMoviesMinAggregateInputType = {
    userId?: true
    movieId?: true
    bookmarkedAt?: true
  }

  export type BookmarkedMoviesMaxAggregateInputType = {
    userId?: true
    movieId?: true
    bookmarkedAt?: true
  }

  export type BookmarkedMoviesCountAggregateInputType = {
    userId?: true
    movieId?: true
    bookmarkedAt?: true
    _all?: true
  }

  export type BookmarkedMoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkedMovies to aggregate.
     */
    where?: BookmarkedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedMovies to fetch.
     */
    orderBy?: BookmarkedMoviesOrderByWithRelationInput | BookmarkedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookmarkedMovies
    **/
    _count?: true | BookmarkedMoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookmarkedMoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookmarkedMoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkedMoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkedMoviesMaxAggregateInputType
  }

  export type GetBookmarkedMoviesAggregateType<T extends BookmarkedMoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarkedMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarkedMovies[P]>
      : GetScalarType<T[P], AggregateBookmarkedMovies[P]>
  }




  export type BookmarkedMoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedMoviesWhereInput
    orderBy?: BookmarkedMoviesOrderByWithAggregationInput | BookmarkedMoviesOrderByWithAggregationInput[]
    by: BookmarkedMoviesScalarFieldEnum[] | BookmarkedMoviesScalarFieldEnum
    having?: BookmarkedMoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkedMoviesCountAggregateInputType | true
    _avg?: BookmarkedMoviesAvgAggregateInputType
    _sum?: BookmarkedMoviesSumAggregateInputType
    _min?: BookmarkedMoviesMinAggregateInputType
    _max?: BookmarkedMoviesMaxAggregateInputType
  }

  export type BookmarkedMoviesGroupByOutputType = {
    userId: number
    movieId: number
    bookmarkedAt: Date
    _count: BookmarkedMoviesCountAggregateOutputType | null
    _avg: BookmarkedMoviesAvgAggregateOutputType | null
    _sum: BookmarkedMoviesSumAggregateOutputType | null
    _min: BookmarkedMoviesMinAggregateOutputType | null
    _max: BookmarkedMoviesMaxAggregateOutputType | null
  }

  type GetBookmarkedMoviesGroupByPayload<T extends BookmarkedMoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkedMoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkedMoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkedMoviesGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkedMoviesGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkedMoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    bookmarkedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkedMovies"]>

  export type BookmarkedMoviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    bookmarkedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkedMovies"]>

  export type BookmarkedMoviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    bookmarkedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkedMovies"]>

  export type BookmarkedMoviesSelectScalar = {
    userId?: boolean
    movieId?: boolean
    bookmarkedAt?: boolean
  }

  export type BookmarkedMoviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "movieId" | "bookmarkedAt", ExtArgs["result"]["bookmarkedMovies"]>
  export type BookmarkedMoviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type BookmarkedMoviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type BookmarkedMoviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $BookmarkedMoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookmarkedMovies"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      movie: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      movieId: number
      bookmarkedAt: Date
    }, ExtArgs["result"]["bookmarkedMovies"]>
    composites: {}
  }

  type BookmarkedMoviesGetPayload<S extends boolean | null | undefined | BookmarkedMoviesDefaultArgs> = $Result.GetResult<Prisma.$BookmarkedMoviesPayload, S>

  type BookmarkedMoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkedMoviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkedMoviesCountAggregateInputType | true
    }

  export interface BookmarkedMoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookmarkedMovies'], meta: { name: 'BookmarkedMovies' } }
    /**
     * Find zero or one BookmarkedMovies that matches the filter.
     * @param {BookmarkedMoviesFindUniqueArgs} args - Arguments to find a BookmarkedMovies
     * @example
     * // Get one BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkedMoviesFindUniqueArgs>(args: SelectSubset<T, BookmarkedMoviesFindUniqueArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookmarkedMovies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkedMoviesFindUniqueOrThrowArgs} args - Arguments to find a BookmarkedMovies
     * @example
     * // Get one BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkedMoviesFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkedMoviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarkedMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedMoviesFindFirstArgs} args - Arguments to find a BookmarkedMovies
     * @example
     * // Get one BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkedMoviesFindFirstArgs>(args?: SelectSubset<T, BookmarkedMoviesFindFirstArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarkedMovies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedMoviesFindFirstOrThrowArgs} args - Arguments to find a BookmarkedMovies
     * @example
     * // Get one BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkedMoviesFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkedMoviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookmarkedMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedMoviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.findMany()
     * 
     * // Get first 10 BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const bookmarkedMoviesWithUserIdOnly = await prisma.bookmarkedMovies.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends BookmarkedMoviesFindManyArgs>(args?: SelectSubset<T, BookmarkedMoviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookmarkedMovies.
     * @param {BookmarkedMoviesCreateArgs} args - Arguments to create a BookmarkedMovies.
     * @example
     * // Create one BookmarkedMovies
     * const BookmarkedMovies = await prisma.bookmarkedMovies.create({
     *   data: {
     *     // ... data to create a BookmarkedMovies
     *   }
     * })
     * 
     */
    create<T extends BookmarkedMoviesCreateArgs>(args: SelectSubset<T, BookmarkedMoviesCreateArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookmarkedMovies.
     * @param {BookmarkedMoviesCreateManyArgs} args - Arguments to create many BookmarkedMovies.
     * @example
     * // Create many BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkedMoviesCreateManyArgs>(args?: SelectSubset<T, BookmarkedMoviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookmarkedMovies and returns the data saved in the database.
     * @param {BookmarkedMoviesCreateManyAndReturnArgs} args - Arguments to create many BookmarkedMovies.
     * @example
     * // Create many BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookmarkedMovies and only return the `userId`
     * const bookmarkedMoviesWithUserIdOnly = await prisma.bookmarkedMovies.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkedMoviesCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkedMoviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookmarkedMovies.
     * @param {BookmarkedMoviesDeleteArgs} args - Arguments to delete one BookmarkedMovies.
     * @example
     * // Delete one BookmarkedMovies
     * const BookmarkedMovies = await prisma.bookmarkedMovies.delete({
     *   where: {
     *     // ... filter to delete one BookmarkedMovies
     *   }
     * })
     * 
     */
    delete<T extends BookmarkedMoviesDeleteArgs>(args: SelectSubset<T, BookmarkedMoviesDeleteArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookmarkedMovies.
     * @param {BookmarkedMoviesUpdateArgs} args - Arguments to update one BookmarkedMovies.
     * @example
     * // Update one BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkedMoviesUpdateArgs>(args: SelectSubset<T, BookmarkedMoviesUpdateArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookmarkedMovies.
     * @param {BookmarkedMoviesDeleteManyArgs} args - Arguments to filter BookmarkedMovies to delete.
     * @example
     * // Delete a few BookmarkedMovies
     * const { count } = await prisma.bookmarkedMovies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkedMoviesDeleteManyArgs>(args?: SelectSubset<T, BookmarkedMoviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedMoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkedMoviesUpdateManyArgs>(args: SelectSubset<T, BookmarkedMoviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkedMovies and returns the data updated in the database.
     * @param {BookmarkedMoviesUpdateManyAndReturnArgs} args - Arguments to update many BookmarkedMovies.
     * @example
     * // Update many BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookmarkedMovies and only return the `userId`
     * const bookmarkedMoviesWithUserIdOnly = await prisma.bookmarkedMovies.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookmarkedMoviesUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkedMoviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookmarkedMovies.
     * @param {BookmarkedMoviesUpsertArgs} args - Arguments to update or create a BookmarkedMovies.
     * @example
     * // Update or create a BookmarkedMovies
     * const bookmarkedMovies = await prisma.bookmarkedMovies.upsert({
     *   create: {
     *     // ... data to create a BookmarkedMovies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookmarkedMovies we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkedMoviesUpsertArgs>(args: SelectSubset<T, BookmarkedMoviesUpsertArgs<ExtArgs>>): Prisma__BookmarkedMoviesClient<$Result.GetResult<Prisma.$BookmarkedMoviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookmarkedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedMoviesCountArgs} args - Arguments to filter BookmarkedMovies to count.
     * @example
     * // Count the number of BookmarkedMovies
     * const count = await prisma.bookmarkedMovies.count({
     *   where: {
     *     // ... the filter for the BookmarkedMovies we want to count
     *   }
     * })
    **/
    count<T extends BookmarkedMoviesCountArgs>(
      args?: Subset<T, BookmarkedMoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkedMoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookmarkedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedMoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarkedMoviesAggregateArgs>(args: Subset<T, BookmarkedMoviesAggregateArgs>): Prisma.PrismaPromise<GetBookmarkedMoviesAggregateType<T>>

    /**
     * Group by BookmarkedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedMoviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarkedMoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkedMoviesGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkedMoviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkedMoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkedMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookmarkedMovies model
   */
  readonly fields: BookmarkedMoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookmarkedMovies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkedMoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookmarkedMovies model
   */
  interface BookmarkedMoviesFieldRefs {
    readonly userId: FieldRef<"BookmarkedMovies", 'Int'>
    readonly movieId: FieldRef<"BookmarkedMovies", 'Int'>
    readonly bookmarkedAt: FieldRef<"BookmarkedMovies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookmarkedMovies findUnique
   */
  export type BookmarkedMoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedMovies to fetch.
     */
    where: BookmarkedMoviesWhereUniqueInput
  }

  /**
   * BookmarkedMovies findUniqueOrThrow
   */
  export type BookmarkedMoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedMovies to fetch.
     */
    where: BookmarkedMoviesWhereUniqueInput
  }

  /**
   * BookmarkedMovies findFirst
   */
  export type BookmarkedMoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedMovies to fetch.
     */
    where?: BookmarkedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedMovies to fetch.
     */
    orderBy?: BookmarkedMoviesOrderByWithRelationInput | BookmarkedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkedMovies.
     */
    cursor?: BookmarkedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkedMovies.
     */
    distinct?: BookmarkedMoviesScalarFieldEnum | BookmarkedMoviesScalarFieldEnum[]
  }

  /**
   * BookmarkedMovies findFirstOrThrow
   */
  export type BookmarkedMoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedMovies to fetch.
     */
    where?: BookmarkedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedMovies to fetch.
     */
    orderBy?: BookmarkedMoviesOrderByWithRelationInput | BookmarkedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkedMovies.
     */
    cursor?: BookmarkedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkedMovies.
     */
    distinct?: BookmarkedMoviesScalarFieldEnum | BookmarkedMoviesScalarFieldEnum[]
  }

  /**
   * BookmarkedMovies findMany
   */
  export type BookmarkedMoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedMovies to fetch.
     */
    where?: BookmarkedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedMovies to fetch.
     */
    orderBy?: BookmarkedMoviesOrderByWithRelationInput | BookmarkedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookmarkedMovies.
     */
    cursor?: BookmarkedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedMovies.
     */
    skip?: number
    distinct?: BookmarkedMoviesScalarFieldEnum | BookmarkedMoviesScalarFieldEnum[]
  }

  /**
   * BookmarkedMovies create
   */
  export type BookmarkedMoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a BookmarkedMovies.
     */
    data: XOR<BookmarkedMoviesCreateInput, BookmarkedMoviesUncheckedCreateInput>
  }

  /**
   * BookmarkedMovies createMany
   */
  export type BookmarkedMoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookmarkedMovies.
     */
    data: BookmarkedMoviesCreateManyInput | BookmarkedMoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookmarkedMovies createManyAndReturn
   */
  export type BookmarkedMoviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * The data used to create many BookmarkedMovies.
     */
    data: BookmarkedMoviesCreateManyInput | BookmarkedMoviesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkedMovies update
   */
  export type BookmarkedMoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a BookmarkedMovies.
     */
    data: XOR<BookmarkedMoviesUpdateInput, BookmarkedMoviesUncheckedUpdateInput>
    /**
     * Choose, which BookmarkedMovies to update.
     */
    where: BookmarkedMoviesWhereUniqueInput
  }

  /**
   * BookmarkedMovies updateMany
   */
  export type BookmarkedMoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookmarkedMovies.
     */
    data: XOR<BookmarkedMoviesUpdateManyMutationInput, BookmarkedMoviesUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkedMovies to update
     */
    where?: BookmarkedMoviesWhereInput
    /**
     * Limit how many BookmarkedMovies to update.
     */
    limit?: number
  }

  /**
   * BookmarkedMovies updateManyAndReturn
   */
  export type BookmarkedMoviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * The data used to update BookmarkedMovies.
     */
    data: XOR<BookmarkedMoviesUpdateManyMutationInput, BookmarkedMoviesUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkedMovies to update
     */
    where?: BookmarkedMoviesWhereInput
    /**
     * Limit how many BookmarkedMovies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkedMovies upsert
   */
  export type BookmarkedMoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the BookmarkedMovies to update in case it exists.
     */
    where: BookmarkedMoviesWhereUniqueInput
    /**
     * In case the BookmarkedMovies found by the `where` argument doesn't exist, create a new BookmarkedMovies with this data.
     */
    create: XOR<BookmarkedMoviesCreateInput, BookmarkedMoviesUncheckedCreateInput>
    /**
     * In case the BookmarkedMovies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkedMoviesUpdateInput, BookmarkedMoviesUncheckedUpdateInput>
  }

  /**
   * BookmarkedMovies delete
   */
  export type BookmarkedMoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
    /**
     * Filter which BookmarkedMovies to delete.
     */
    where: BookmarkedMoviesWhereUniqueInput
  }

  /**
   * BookmarkedMovies deleteMany
   */
  export type BookmarkedMoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkedMovies to delete
     */
    where?: BookmarkedMoviesWhereInput
    /**
     * Limit how many BookmarkedMovies to delete.
     */
    limit?: number
  }

  /**
   * BookmarkedMovies without action
   */
  export type BookmarkedMoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedMovies
     */
    select?: BookmarkedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedMovies
     */
    omit?: BookmarkedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedMoviesInclude<ExtArgs> | null
  }


  /**
   * Model WatchedMovies
   */

  export type AggregateWatchedMovies = {
    _count: WatchedMoviesCountAggregateOutputType | null
    _avg: WatchedMoviesAvgAggregateOutputType | null
    _sum: WatchedMoviesSumAggregateOutputType | null
    _min: WatchedMoviesMinAggregateOutputType | null
    _max: WatchedMoviesMaxAggregateOutputType | null
  }

  export type WatchedMoviesAvgAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type WatchedMoviesSumAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type WatchedMoviesMinAggregateOutputType = {
    userId: number | null
    movieId: number | null
    watchedAt: Date | null
  }

  export type WatchedMoviesMaxAggregateOutputType = {
    userId: number | null
    movieId: number | null
    watchedAt: Date | null
  }

  export type WatchedMoviesCountAggregateOutputType = {
    userId: number
    movieId: number
    watchedAt: number
    _all: number
  }


  export type WatchedMoviesAvgAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type WatchedMoviesSumAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type WatchedMoviesMinAggregateInputType = {
    userId?: true
    movieId?: true
    watchedAt?: true
  }

  export type WatchedMoviesMaxAggregateInputType = {
    userId?: true
    movieId?: true
    watchedAt?: true
  }

  export type WatchedMoviesCountAggregateInputType = {
    userId?: true
    movieId?: true
    watchedAt?: true
    _all?: true
  }

  export type WatchedMoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchedMovies to aggregate.
     */
    where?: WatchedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedMovies to fetch.
     */
    orderBy?: WatchedMoviesOrderByWithRelationInput | WatchedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchedMovies
    **/
    _count?: true | WatchedMoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchedMoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchedMoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchedMoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchedMoviesMaxAggregateInputType
  }

  export type GetWatchedMoviesAggregateType<T extends WatchedMoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchedMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchedMovies[P]>
      : GetScalarType<T[P], AggregateWatchedMovies[P]>
  }




  export type WatchedMoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedMoviesWhereInput
    orderBy?: WatchedMoviesOrderByWithAggregationInput | WatchedMoviesOrderByWithAggregationInput[]
    by: WatchedMoviesScalarFieldEnum[] | WatchedMoviesScalarFieldEnum
    having?: WatchedMoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchedMoviesCountAggregateInputType | true
    _avg?: WatchedMoviesAvgAggregateInputType
    _sum?: WatchedMoviesSumAggregateInputType
    _min?: WatchedMoviesMinAggregateInputType
    _max?: WatchedMoviesMaxAggregateInputType
  }

  export type WatchedMoviesGroupByOutputType = {
    userId: number
    movieId: number
    watchedAt: Date
    _count: WatchedMoviesCountAggregateOutputType | null
    _avg: WatchedMoviesAvgAggregateOutputType | null
    _sum: WatchedMoviesSumAggregateOutputType | null
    _min: WatchedMoviesMinAggregateOutputType | null
    _max: WatchedMoviesMaxAggregateOutputType | null
  }

  type GetWatchedMoviesGroupByPayload<T extends WatchedMoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchedMoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchedMoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchedMoviesGroupByOutputType[P]>
            : GetScalarType<T[P], WatchedMoviesGroupByOutputType[P]>
        }
      >
    >


  export type WatchedMoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    watchedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchedMovies"]>

  export type WatchedMoviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    watchedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchedMovies"]>

  export type WatchedMoviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    movieId?: boolean
    watchedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchedMovies"]>

  export type WatchedMoviesSelectScalar = {
    userId?: boolean
    movieId?: boolean
    watchedAt?: boolean
  }

  export type WatchedMoviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "movieId" | "watchedAt", ExtArgs["result"]["watchedMovies"]>
  export type WatchedMoviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type WatchedMoviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type WatchedMoviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $WatchedMoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchedMovies"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      movie: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      movieId: number
      watchedAt: Date
    }, ExtArgs["result"]["watchedMovies"]>
    composites: {}
  }

  type WatchedMoviesGetPayload<S extends boolean | null | undefined | WatchedMoviesDefaultArgs> = $Result.GetResult<Prisma.$WatchedMoviesPayload, S>

  type WatchedMoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchedMoviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchedMoviesCountAggregateInputType | true
    }

  export interface WatchedMoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchedMovies'], meta: { name: 'WatchedMovies' } }
    /**
     * Find zero or one WatchedMovies that matches the filter.
     * @param {WatchedMoviesFindUniqueArgs} args - Arguments to find a WatchedMovies
     * @example
     * // Get one WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchedMoviesFindUniqueArgs>(args: SelectSubset<T, WatchedMoviesFindUniqueArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchedMovies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchedMoviesFindUniqueOrThrowArgs} args - Arguments to find a WatchedMovies
     * @example
     * // Get one WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchedMoviesFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchedMoviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchedMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedMoviesFindFirstArgs} args - Arguments to find a WatchedMovies
     * @example
     * // Get one WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchedMoviesFindFirstArgs>(args?: SelectSubset<T, WatchedMoviesFindFirstArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchedMovies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedMoviesFindFirstOrThrowArgs} args - Arguments to find a WatchedMovies
     * @example
     * // Get one WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchedMoviesFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchedMoviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchedMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedMoviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.findMany()
     * 
     * // Get first 10 WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const watchedMoviesWithUserIdOnly = await prisma.watchedMovies.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends WatchedMoviesFindManyArgs>(args?: SelectSubset<T, WatchedMoviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchedMovies.
     * @param {WatchedMoviesCreateArgs} args - Arguments to create a WatchedMovies.
     * @example
     * // Create one WatchedMovies
     * const WatchedMovies = await prisma.watchedMovies.create({
     *   data: {
     *     // ... data to create a WatchedMovies
     *   }
     * })
     * 
     */
    create<T extends WatchedMoviesCreateArgs>(args: SelectSubset<T, WatchedMoviesCreateArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchedMovies.
     * @param {WatchedMoviesCreateManyArgs} args - Arguments to create many WatchedMovies.
     * @example
     * // Create many WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchedMoviesCreateManyArgs>(args?: SelectSubset<T, WatchedMoviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchedMovies and returns the data saved in the database.
     * @param {WatchedMoviesCreateManyAndReturnArgs} args - Arguments to create many WatchedMovies.
     * @example
     * // Create many WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchedMovies and only return the `userId`
     * const watchedMoviesWithUserIdOnly = await prisma.watchedMovies.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchedMoviesCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchedMoviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchedMovies.
     * @param {WatchedMoviesDeleteArgs} args - Arguments to delete one WatchedMovies.
     * @example
     * // Delete one WatchedMovies
     * const WatchedMovies = await prisma.watchedMovies.delete({
     *   where: {
     *     // ... filter to delete one WatchedMovies
     *   }
     * })
     * 
     */
    delete<T extends WatchedMoviesDeleteArgs>(args: SelectSubset<T, WatchedMoviesDeleteArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchedMovies.
     * @param {WatchedMoviesUpdateArgs} args - Arguments to update one WatchedMovies.
     * @example
     * // Update one WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchedMoviesUpdateArgs>(args: SelectSubset<T, WatchedMoviesUpdateArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchedMovies.
     * @param {WatchedMoviesDeleteManyArgs} args - Arguments to filter WatchedMovies to delete.
     * @example
     * // Delete a few WatchedMovies
     * const { count } = await prisma.watchedMovies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchedMoviesDeleteManyArgs>(args?: SelectSubset<T, WatchedMoviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedMoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchedMoviesUpdateManyArgs>(args: SelectSubset<T, WatchedMoviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchedMovies and returns the data updated in the database.
     * @param {WatchedMoviesUpdateManyAndReturnArgs} args - Arguments to update many WatchedMovies.
     * @example
     * // Update many WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchedMovies and only return the `userId`
     * const watchedMoviesWithUserIdOnly = await prisma.watchedMovies.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchedMoviesUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchedMoviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchedMovies.
     * @param {WatchedMoviesUpsertArgs} args - Arguments to update or create a WatchedMovies.
     * @example
     * // Update or create a WatchedMovies
     * const watchedMovies = await prisma.watchedMovies.upsert({
     *   create: {
     *     // ... data to create a WatchedMovies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchedMovies we want to update
     *   }
     * })
     */
    upsert<T extends WatchedMoviesUpsertArgs>(args: SelectSubset<T, WatchedMoviesUpsertArgs<ExtArgs>>): Prisma__WatchedMoviesClient<$Result.GetResult<Prisma.$WatchedMoviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedMoviesCountArgs} args - Arguments to filter WatchedMovies to count.
     * @example
     * // Count the number of WatchedMovies
     * const count = await prisma.watchedMovies.count({
     *   where: {
     *     // ... the filter for the WatchedMovies we want to count
     *   }
     * })
    **/
    count<T extends WatchedMoviesCountArgs>(
      args?: Subset<T, WatchedMoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchedMoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedMoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchedMoviesAggregateArgs>(args: Subset<T, WatchedMoviesAggregateArgs>): Prisma.PrismaPromise<GetWatchedMoviesAggregateType<T>>

    /**
     * Group by WatchedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedMoviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchedMoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchedMoviesGroupByArgs['orderBy'] }
        : { orderBy?: WatchedMoviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchedMoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchedMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchedMovies model
   */
  readonly fields: WatchedMoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchedMovies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchedMoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchedMovies model
   */
  interface WatchedMoviesFieldRefs {
    readonly userId: FieldRef<"WatchedMovies", 'Int'>
    readonly movieId: FieldRef<"WatchedMovies", 'Int'>
    readonly watchedAt: FieldRef<"WatchedMovies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchedMovies findUnique
   */
  export type WatchedMoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which WatchedMovies to fetch.
     */
    where: WatchedMoviesWhereUniqueInput
  }

  /**
   * WatchedMovies findUniqueOrThrow
   */
  export type WatchedMoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which WatchedMovies to fetch.
     */
    where: WatchedMoviesWhereUniqueInput
  }

  /**
   * WatchedMovies findFirst
   */
  export type WatchedMoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which WatchedMovies to fetch.
     */
    where?: WatchedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedMovies to fetch.
     */
    orderBy?: WatchedMoviesOrderByWithRelationInput | WatchedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchedMovies.
     */
    cursor?: WatchedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchedMovies.
     */
    distinct?: WatchedMoviesScalarFieldEnum | WatchedMoviesScalarFieldEnum[]
  }

  /**
   * WatchedMovies findFirstOrThrow
   */
  export type WatchedMoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which WatchedMovies to fetch.
     */
    where?: WatchedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedMovies to fetch.
     */
    orderBy?: WatchedMoviesOrderByWithRelationInput | WatchedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchedMovies.
     */
    cursor?: WatchedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchedMovies.
     */
    distinct?: WatchedMoviesScalarFieldEnum | WatchedMoviesScalarFieldEnum[]
  }

  /**
   * WatchedMovies findMany
   */
  export type WatchedMoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * Filter, which WatchedMovies to fetch.
     */
    where?: WatchedMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchedMovies to fetch.
     */
    orderBy?: WatchedMoviesOrderByWithRelationInput | WatchedMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchedMovies.
     */
    cursor?: WatchedMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchedMovies.
     */
    skip?: number
    distinct?: WatchedMoviesScalarFieldEnum | WatchedMoviesScalarFieldEnum[]
  }

  /**
   * WatchedMovies create
   */
  export type WatchedMoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchedMovies.
     */
    data: XOR<WatchedMoviesCreateInput, WatchedMoviesUncheckedCreateInput>
  }

  /**
   * WatchedMovies createMany
   */
  export type WatchedMoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchedMovies.
     */
    data: WatchedMoviesCreateManyInput | WatchedMoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchedMovies createManyAndReturn
   */
  export type WatchedMoviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * The data used to create many WatchedMovies.
     */
    data: WatchedMoviesCreateManyInput | WatchedMoviesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchedMovies update
   */
  export type WatchedMoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchedMovies.
     */
    data: XOR<WatchedMoviesUpdateInput, WatchedMoviesUncheckedUpdateInput>
    /**
     * Choose, which WatchedMovies to update.
     */
    where: WatchedMoviesWhereUniqueInput
  }

  /**
   * WatchedMovies updateMany
   */
  export type WatchedMoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchedMovies.
     */
    data: XOR<WatchedMoviesUpdateManyMutationInput, WatchedMoviesUncheckedUpdateManyInput>
    /**
     * Filter which WatchedMovies to update
     */
    where?: WatchedMoviesWhereInput
    /**
     * Limit how many WatchedMovies to update.
     */
    limit?: number
  }

  /**
   * WatchedMovies updateManyAndReturn
   */
  export type WatchedMoviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * The data used to update WatchedMovies.
     */
    data: XOR<WatchedMoviesUpdateManyMutationInput, WatchedMoviesUncheckedUpdateManyInput>
    /**
     * Filter which WatchedMovies to update
     */
    where?: WatchedMoviesWhereInput
    /**
     * Limit how many WatchedMovies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchedMovies upsert
   */
  export type WatchedMoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchedMovies to update in case it exists.
     */
    where: WatchedMoviesWhereUniqueInput
    /**
     * In case the WatchedMovies found by the `where` argument doesn't exist, create a new WatchedMovies with this data.
     */
    create: XOR<WatchedMoviesCreateInput, WatchedMoviesUncheckedCreateInput>
    /**
     * In case the WatchedMovies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchedMoviesUpdateInput, WatchedMoviesUncheckedUpdateInput>
  }

  /**
   * WatchedMovies delete
   */
  export type WatchedMoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
    /**
     * Filter which WatchedMovies to delete.
     */
    where: WatchedMoviesWhereUniqueInput
  }

  /**
   * WatchedMovies deleteMany
   */
  export type WatchedMoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchedMovies to delete
     */
    where?: WatchedMoviesWhereInput
    /**
     * Limit how many WatchedMovies to delete.
     */
    limit?: number
  }

  /**
   * WatchedMovies without action
   */
  export type WatchedMoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchedMovies
     */
    select?: WatchedMoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchedMovies
     */
    omit?: WatchedMoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedMoviesInclude<ExtArgs> | null
  }


  /**
   * Model Followers
   */

  export type AggregateFollowers = {
    _count: FollowersCountAggregateOutputType | null
    _avg: FollowersAvgAggregateOutputType | null
    _sum: FollowersSumAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  export type FollowersAvgAggregateOutputType = {
    userId: number | null
    followerId: number | null
  }

  export type FollowersSumAggregateOutputType = {
    userId: number | null
    followerId: number | null
  }

  export type FollowersMinAggregateOutputType = {
    userId: number | null
    followerId: number | null
  }

  export type FollowersMaxAggregateOutputType = {
    userId: number | null
    followerId: number | null
  }

  export type FollowersCountAggregateOutputType = {
    userId: number
    followerId: number
    _all: number
  }


  export type FollowersAvgAggregateInputType = {
    userId?: true
    followerId?: true
  }

  export type FollowersSumAggregateInputType = {
    userId?: true
    followerId?: true
  }

  export type FollowersMinAggregateInputType = {
    userId?: true
    followerId?: true
  }

  export type FollowersMaxAggregateInputType = {
    userId?: true
    followerId?: true
  }

  export type FollowersCountAggregateInputType = {
    userId?: true
    followerId?: true
    _all?: true
  }

  export type FollowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followers to aggregate.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followers
    **/
    _count?: true | FollowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowersMaxAggregateInputType
  }

  export type GetFollowersAggregateType<T extends FollowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowers[P]>
      : GetScalarType<T[P], AggregateFollowers[P]>
  }




  export type FollowersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowersWhereInput
    orderBy?: FollowersOrderByWithAggregationInput | FollowersOrderByWithAggregationInput[]
    by: FollowersScalarFieldEnum[] | FollowersScalarFieldEnum
    having?: FollowersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowersCountAggregateInputType | true
    _avg?: FollowersAvgAggregateInputType
    _sum?: FollowersSumAggregateInputType
    _min?: FollowersMinAggregateInputType
    _max?: FollowersMaxAggregateInputType
  }

  export type FollowersGroupByOutputType = {
    userId: number
    followerId: number
    _count: FollowersCountAggregateOutputType | null
    _avg: FollowersAvgAggregateOutputType | null
    _sum: FollowersSumAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  type GetFollowersGroupByPayload<T extends FollowersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowersGroupByOutputType[P]>
            : GetScalarType<T[P], FollowersGroupByOutputType[P]>
        }
      >
    >


  export type FollowersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    followerId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    follower?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followers"]>

  export type FollowersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    followerId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    follower?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followers"]>

  export type FollowersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    followerId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    follower?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followers"]>

  export type FollowersSelectScalar = {
    userId?: boolean
    followerId?: boolean
  }

  export type FollowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "followerId", ExtArgs["result"]["followers"]>
  export type FollowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    follower?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type FollowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    follower?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type FollowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    follower?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $FollowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Followers"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      follower: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      followerId: number
    }, ExtArgs["result"]["followers"]>
    composites: {}
  }

  type FollowersGetPayload<S extends boolean | null | undefined | FollowersDefaultArgs> = $Result.GetResult<Prisma.$FollowersPayload, S>

  type FollowersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowersCountAggregateInputType | true
    }

  export interface FollowersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Followers'], meta: { name: 'Followers' } }
    /**
     * Find zero or one Followers that matches the filter.
     * @param {FollowersFindUniqueArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowersFindUniqueArgs>(args: SelectSubset<T, FollowersFindUniqueArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Followers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowersFindUniqueOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowersFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindFirstArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowersFindFirstArgs>(args?: SelectSubset<T, FollowersFindFirstArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Followers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindFirstOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowersFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowersFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.followers.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.followers.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const followersWithUserIdOnly = await prisma.followers.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends FollowersFindManyArgs>(args?: SelectSubset<T, FollowersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Followers.
     * @param {FollowersCreateArgs} args - Arguments to create a Followers.
     * @example
     * // Create one Followers
     * const Followers = await prisma.followers.create({
     *   data: {
     *     // ... data to create a Followers
     *   }
     * })
     * 
     */
    create<T extends FollowersCreateArgs>(args: SelectSubset<T, FollowersCreateArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Followers.
     * @param {FollowersCreateManyArgs} args - Arguments to create many Followers.
     * @example
     * // Create many Followers
     * const followers = await prisma.followers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowersCreateManyArgs>(args?: SelectSubset<T, FollowersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Followers and returns the data saved in the database.
     * @param {FollowersCreateManyAndReturnArgs} args - Arguments to create many Followers.
     * @example
     * // Create many Followers
     * const followers = await prisma.followers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Followers and only return the `userId`
     * const followersWithUserIdOnly = await prisma.followers.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowersCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Followers.
     * @param {FollowersDeleteArgs} args - Arguments to delete one Followers.
     * @example
     * // Delete one Followers
     * const Followers = await prisma.followers.delete({
     *   where: {
     *     // ... filter to delete one Followers
     *   }
     * })
     * 
     */
    delete<T extends FollowersDeleteArgs>(args: SelectSubset<T, FollowersDeleteArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Followers.
     * @param {FollowersUpdateArgs} args - Arguments to update one Followers.
     * @example
     * // Update one Followers
     * const followers = await prisma.followers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowersUpdateArgs>(args: SelectSubset<T, FollowersUpdateArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Followers.
     * @param {FollowersDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.followers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowersDeleteManyArgs>(args?: SelectSubset<T, FollowersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const followers = await prisma.followers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowersUpdateManyArgs>(args: SelectSubset<T, FollowersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers and returns the data updated in the database.
     * @param {FollowersUpdateManyAndReturnArgs} args - Arguments to update many Followers.
     * @example
     * // Update many Followers
     * const followers = await prisma.followers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Followers and only return the `userId`
     * const followersWithUserIdOnly = await prisma.followers.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowersUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Followers.
     * @param {FollowersUpsertArgs} args - Arguments to update or create a Followers.
     * @example
     * // Update or create a Followers
     * const followers = await prisma.followers.upsert({
     *   create: {
     *     // ... data to create a Followers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Followers we want to update
     *   }
     * })
     */
    upsert<T extends FollowersUpsertArgs>(args: SelectSubset<T, FollowersUpsertArgs<ExtArgs>>): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.followers.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends FollowersCountArgs>(
      args?: Subset<T, FollowersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowersAggregateArgs>(args: Subset<T, FollowersAggregateArgs>): Prisma.PrismaPromise<GetFollowersAggregateType<T>>

    /**
     * Group by Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowersGroupByArgs['orderBy'] }
        : { orderBy?: FollowersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Followers model
   */
  readonly fields: FollowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Followers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    follower<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Followers model
   */
  interface FollowersFieldRefs {
    readonly userId: FieldRef<"Followers", 'Int'>
    readonly followerId: FieldRef<"Followers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Followers findUnique
   */
  export type FollowersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where: FollowersWhereUniqueInput
  }

  /**
   * Followers findUniqueOrThrow
   */
  export type FollowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where: FollowersWhereUniqueInput
  }

  /**
   * Followers findFirst
   */
  export type FollowersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * Followers findFirstOrThrow
   */
  export type FollowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * Followers findMany
   */
  export type FollowersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * Followers create
   */
  export type FollowersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * The data needed to create a Followers.
     */
    data: XOR<FollowersCreateInput, FollowersUncheckedCreateInput>
  }

  /**
   * Followers createMany
   */
  export type FollowersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followers.
     */
    data: FollowersCreateManyInput | FollowersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Followers createManyAndReturn
   */
  export type FollowersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * The data used to create many Followers.
     */
    data: FollowersCreateManyInput | FollowersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Followers update
   */
  export type FollowersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * The data needed to update a Followers.
     */
    data: XOR<FollowersUpdateInput, FollowersUncheckedUpdateInput>
    /**
     * Choose, which Followers to update.
     */
    where: FollowersWhereUniqueInput
  }

  /**
   * Followers updateMany
   */
  export type FollowersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Followers.
     */
    data: XOR<FollowersUpdateManyMutationInput, FollowersUncheckedUpdateManyInput>
    /**
     * Filter which Followers to update
     */
    where?: FollowersWhereInput
    /**
     * Limit how many Followers to update.
     */
    limit?: number
  }

  /**
   * Followers updateManyAndReturn
   */
  export type FollowersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * The data used to update Followers.
     */
    data: XOR<FollowersUpdateManyMutationInput, FollowersUncheckedUpdateManyInput>
    /**
     * Filter which Followers to update
     */
    where?: FollowersWhereInput
    /**
     * Limit how many Followers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Followers upsert
   */
  export type FollowersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * The filter to search for the Followers to update in case it exists.
     */
    where: FollowersWhereUniqueInput
    /**
     * In case the Followers found by the `where` argument doesn't exist, create a new Followers with this data.
     */
    create: XOR<FollowersCreateInput, FollowersUncheckedCreateInput>
    /**
     * In case the Followers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowersUpdateInput, FollowersUncheckedUpdateInput>
  }

  /**
   * Followers delete
   */
  export type FollowersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter which Followers to delete.
     */
    where: FollowersWhereUniqueInput
  }

  /**
   * Followers deleteMany
   */
  export type FollowersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followers to delete
     */
    where?: FollowersWhereInput
    /**
     * Limit how many Followers to delete.
     */
    limit?: number
  }

  /**
   * Followers without action
   */
  export type FollowersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Followers
     */
    omit?: FollowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const LoginTokensScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type LoginTokensScalarFieldEnum = (typeof LoginTokensScalarFieldEnum)[keyof typeof LoginTokensScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    release_year: 'release_year',
    imageUrl: 'imageUrl',
    posterUrl: 'posterUrl',
    duration: 'duration',
    rating: 'rating',
    releaseDate: 'releaseDate',
    created_at: 'created_at'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const MoviesCategoriesScalarFieldEnum: {
    movieId: 'movieId',
    categoryId: 'categoryId'
  };

  export type MoviesCategoriesScalarFieldEnum = (typeof MoviesCategoriesScalarFieldEnum)[keyof typeof MoviesCategoriesScalarFieldEnum]


  export const FeaturedMovieScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    updatedAt: 'updatedAt'
  };

  export type FeaturedMovieScalarFieldEnum = (typeof FeaturedMovieScalarFieldEnum)[keyof typeof FeaturedMovieScalarFieldEnum]


  export const HomepageSectionScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    title: 'title',
    sortOrder: 'sortOrder',
    movieLimit: 'movieLimit'
  };

  export type HomepageSectionScalarFieldEnum = (typeof HomepageSectionScalarFieldEnum)[keyof typeof HomepageSectionScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const BookmarkedMoviesScalarFieldEnum: {
    userId: 'userId',
    movieId: 'movieId',
    bookmarkedAt: 'bookmarkedAt'
  };

  export type BookmarkedMoviesScalarFieldEnum = (typeof BookmarkedMoviesScalarFieldEnum)[keyof typeof BookmarkedMoviesScalarFieldEnum]


  export const WatchedMoviesScalarFieldEnum: {
    userId: 'userId',
    movieId: 'movieId',
    watchedAt: 'watchedAt'
  };

  export type WatchedMoviesScalarFieldEnum = (typeof WatchedMoviesScalarFieldEnum)[keyof typeof WatchedMoviesScalarFieldEnum]


  export const FollowersScalarFieldEnum: {
    userId: 'userId',
    followerId: 'followerId'
  };

  export type FollowersScalarFieldEnum = (typeof FollowersScalarFieldEnum)[keyof typeof FollowersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    tokens?: LoginTokensListRelationFilter
    reviews?: ReviewsListRelationFilter
    bookmarks?: BookmarkedMoviesListRelationFilter
    watchedMovies?: WatchedMoviesListRelationFilter
    followers?: FollowersListRelationFilter
    following?: FollowersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    tokens?: LoginTokensOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    bookmarks?: BookmarkedMoviesOrderByRelationAggregateInput
    watchedMovies?: WatchedMoviesOrderByRelationAggregateInput
    followers?: FollowersOrderByRelationAggregateInput
    following?: FollowersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password_hash?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    tokens?: LoginTokensListRelationFilter
    reviews?: ReviewsListRelationFilter
    bookmarks?: BookmarkedMoviesListRelationFilter
    watchedMovies?: WatchedMoviesListRelationFilter
    followers?: FollowersListRelationFilter
    following?: FollowersListRelationFilter
  }, "id" | "username" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password_hash?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type LoginTokensWhereInput = {
    AND?: LoginTokensWhereInput | LoginTokensWhereInput[]
    OR?: LoginTokensWhereInput[]
    NOT?: LoginTokensWhereInput | LoginTokensWhereInput[]
    id?: IntFilter<"LoginTokens"> | number
    userId?: IntFilter<"LoginTokens"> | number
    token?: StringFilter<"LoginTokens"> | string
    createdAt?: DateTimeFilter<"LoginTokens"> | Date | string
    expiresAt?: DateTimeFilter<"LoginTokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type LoginTokensOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type LoginTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoginTokensWhereInput | LoginTokensWhereInput[]
    OR?: LoginTokensWhereInput[]
    NOT?: LoginTokensWhereInput | LoginTokensWhereInput[]
    userId?: IntFilter<"LoginTokens"> | number
    token?: StringFilter<"LoginTokens"> | string
    createdAt?: DateTimeFilter<"LoginTokens"> | Date | string
    expiresAt?: DateTimeFilter<"LoginTokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type LoginTokensOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: LoginTokensCountOrderByAggregateInput
    _avg?: LoginTokensAvgOrderByAggregateInput
    _max?: LoginTokensMaxOrderByAggregateInput
    _min?: LoginTokensMinOrderByAggregateInput
    _sum?: LoginTokensSumOrderByAggregateInput
  }

  export type LoginTokensScalarWhereWithAggregatesInput = {
    AND?: LoginTokensScalarWhereWithAggregatesInput | LoginTokensScalarWhereWithAggregatesInput[]
    OR?: LoginTokensScalarWhereWithAggregatesInput[]
    NOT?: LoginTokensScalarWhereWithAggregatesInput | LoginTokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LoginTokens"> | number
    userId?: IntWithAggregatesFilter<"LoginTokens"> | number
    token?: StringWithAggregatesFilter<"LoginTokens"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoginTokens"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"LoginTokens"> | Date | string
  }

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    id?: IntFilter<"Movies"> | number
    title?: StringFilter<"Movies"> | string
    description?: StringNullableFilter<"Movies"> | string | null
    release_year?: IntFilter<"Movies"> | number
    imageUrl?: StringFilter<"Movies"> | string
    posterUrl?: StringNullableFilter<"Movies"> | string | null
    duration?: IntFilter<"Movies"> | number
    rating?: FloatFilter<"Movies"> | number
    releaseDate?: DateTimeFilter<"Movies"> | Date | string
    created_at?: DateTimeFilter<"Movies"> | Date | string
    categories?: MoviesCategoriesListRelationFilter
    reviews?: ReviewsListRelationFilter
    bookmarks?: BookmarkedMoviesListRelationFilter
    watchedMovies?: WatchedMoviesListRelationFilter
    featuredMovie?: XOR<FeaturedMovieNullableScalarRelationFilter, FeaturedMovieWhereInput> | null
  }

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    release_year?: SortOrder
    imageUrl?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    duration?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
    created_at?: SortOrder
    categories?: MoviesCategoriesOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    bookmarks?: BookmarkedMoviesOrderByRelationAggregateInput
    watchedMovies?: WatchedMoviesOrderByRelationAggregateInput
    featuredMovie?: FeaturedMovieOrderByWithRelationInput
  }

  export type MoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    title?: StringFilter<"Movies"> | string
    description?: StringNullableFilter<"Movies"> | string | null
    release_year?: IntFilter<"Movies"> | number
    imageUrl?: StringFilter<"Movies"> | string
    posterUrl?: StringNullableFilter<"Movies"> | string | null
    duration?: IntFilter<"Movies"> | number
    rating?: FloatFilter<"Movies"> | number
    releaseDate?: DateTimeFilter<"Movies"> | Date | string
    created_at?: DateTimeFilter<"Movies"> | Date | string
    categories?: MoviesCategoriesListRelationFilter
    reviews?: ReviewsListRelationFilter
    bookmarks?: BookmarkedMoviesListRelationFilter
    watchedMovies?: WatchedMoviesListRelationFilter
    featuredMovie?: XOR<FeaturedMovieNullableScalarRelationFilter, FeaturedMovieWhereInput> | null
  }, "id">

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    release_year?: SortOrder
    imageUrl?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    duration?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
    created_at?: SortOrder
    _count?: MoviesCountOrderByAggregateInput
    _avg?: MoviesAvgOrderByAggregateInput
    _max?: MoviesMaxOrderByAggregateInput
    _min?: MoviesMinOrderByAggregateInput
    _sum?: MoviesSumOrderByAggregateInput
  }

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    OR?: MoviesScalarWhereWithAggregatesInput[]
    NOT?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movies"> | number
    title?: StringWithAggregatesFilter<"Movies"> | string
    description?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    release_year?: IntWithAggregatesFilter<"Movies"> | number
    imageUrl?: StringWithAggregatesFilter<"Movies"> | string
    posterUrl?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    duration?: IntWithAggregatesFilter<"Movies"> | number
    rating?: FloatWithAggregatesFilter<"Movies"> | number
    releaseDate?: DateTimeWithAggregatesFilter<"Movies"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Movies"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    description?: StringFilter<"Categories"> | string
    movies?: MoviesCategoriesListRelationFilter
    homepageSections?: HomepageSectionListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    movies?: MoviesCategoriesOrderByRelationAggregateInput
    homepageSections?: HomepageSectionOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    description?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    movies?: MoviesCategoriesListRelationFilter
    homepageSections?: HomepageSectionListRelationFilter
  }, "id" | "description">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    description?: StringWithAggregatesFilter<"Categories"> | string
  }

  export type MoviesCategoriesWhereInput = {
    AND?: MoviesCategoriesWhereInput | MoviesCategoriesWhereInput[]
    OR?: MoviesCategoriesWhereInput[]
    NOT?: MoviesCategoriesWhereInput | MoviesCategoriesWhereInput[]
    movieId?: IntFilter<"MoviesCategories"> | number
    categoryId?: IntFilter<"MoviesCategories"> | number
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }

  export type MoviesCategoriesOrderByWithRelationInput = {
    movieId?: SortOrder
    categoryId?: SortOrder
    movie?: MoviesOrderByWithRelationInput
    category?: CategoriesOrderByWithRelationInput
  }

  export type MoviesCategoriesWhereUniqueInput = Prisma.AtLeast<{
    movieId_categoryId?: MoviesCategoriesMovieIdCategoryIdCompoundUniqueInput
    AND?: MoviesCategoriesWhereInput | MoviesCategoriesWhereInput[]
    OR?: MoviesCategoriesWhereInput[]
    NOT?: MoviesCategoriesWhereInput | MoviesCategoriesWhereInput[]
    movieId?: IntFilter<"MoviesCategories"> | number
    categoryId?: IntFilter<"MoviesCategories"> | number
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }, "movieId_categoryId">

  export type MoviesCategoriesOrderByWithAggregationInput = {
    movieId?: SortOrder
    categoryId?: SortOrder
    _count?: MoviesCategoriesCountOrderByAggregateInput
    _avg?: MoviesCategoriesAvgOrderByAggregateInput
    _max?: MoviesCategoriesMaxOrderByAggregateInput
    _min?: MoviesCategoriesMinOrderByAggregateInput
    _sum?: MoviesCategoriesSumOrderByAggregateInput
  }

  export type MoviesCategoriesScalarWhereWithAggregatesInput = {
    AND?: MoviesCategoriesScalarWhereWithAggregatesInput | MoviesCategoriesScalarWhereWithAggregatesInput[]
    OR?: MoviesCategoriesScalarWhereWithAggregatesInput[]
    NOT?: MoviesCategoriesScalarWhereWithAggregatesInput | MoviesCategoriesScalarWhereWithAggregatesInput[]
    movieId?: IntWithAggregatesFilter<"MoviesCategories"> | number
    categoryId?: IntWithAggregatesFilter<"MoviesCategories"> | number
  }

  export type FeaturedMovieWhereInput = {
    AND?: FeaturedMovieWhereInput | FeaturedMovieWhereInput[]
    OR?: FeaturedMovieWhereInput[]
    NOT?: FeaturedMovieWhereInput | FeaturedMovieWhereInput[]
    id?: IntFilter<"FeaturedMovie"> | number
    movieId?: IntFilter<"FeaturedMovie"> | number
    updatedAt?: DateTimeFilter<"FeaturedMovie"> | Date | string
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type FeaturedMovieOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    updatedAt?: SortOrder
    movie?: MoviesOrderByWithRelationInput
  }

  export type FeaturedMovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    movieId?: number
    AND?: FeaturedMovieWhereInput | FeaturedMovieWhereInput[]
    OR?: FeaturedMovieWhereInput[]
    NOT?: FeaturedMovieWhereInput | FeaturedMovieWhereInput[]
    updatedAt?: DateTimeFilter<"FeaturedMovie"> | Date | string
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "id" | "movieId">

  export type FeaturedMovieOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    updatedAt?: SortOrder
    _count?: FeaturedMovieCountOrderByAggregateInput
    _avg?: FeaturedMovieAvgOrderByAggregateInput
    _max?: FeaturedMovieMaxOrderByAggregateInput
    _min?: FeaturedMovieMinOrderByAggregateInput
    _sum?: FeaturedMovieSumOrderByAggregateInput
  }

  export type FeaturedMovieScalarWhereWithAggregatesInput = {
    AND?: FeaturedMovieScalarWhereWithAggregatesInput | FeaturedMovieScalarWhereWithAggregatesInput[]
    OR?: FeaturedMovieScalarWhereWithAggregatesInput[]
    NOT?: FeaturedMovieScalarWhereWithAggregatesInput | FeaturedMovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeaturedMovie"> | number
    movieId?: IntWithAggregatesFilter<"FeaturedMovie"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"FeaturedMovie"> | Date | string
  }

  export type HomepageSectionWhereInput = {
    AND?: HomepageSectionWhereInput | HomepageSectionWhereInput[]
    OR?: HomepageSectionWhereInput[]
    NOT?: HomepageSectionWhereInput | HomepageSectionWhereInput[]
    id?: IntFilter<"HomepageSection"> | number
    categoryId?: IntFilter<"HomepageSection"> | number
    title?: StringFilter<"HomepageSection"> | string
    sortOrder?: IntFilter<"HomepageSection"> | number
    movieLimit?: IntFilter<"HomepageSection"> | number
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }

  export type HomepageSectionOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    movieLimit?: SortOrder
    category?: CategoriesOrderByWithRelationInput
  }

  export type HomepageSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HomepageSectionWhereInput | HomepageSectionWhereInput[]
    OR?: HomepageSectionWhereInput[]
    NOT?: HomepageSectionWhereInput | HomepageSectionWhereInput[]
    categoryId?: IntFilter<"HomepageSection"> | number
    title?: StringFilter<"HomepageSection"> | string
    sortOrder?: IntFilter<"HomepageSection"> | number
    movieLimit?: IntFilter<"HomepageSection"> | number
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }, "id">

  export type HomepageSectionOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    movieLimit?: SortOrder
    _count?: HomepageSectionCountOrderByAggregateInput
    _avg?: HomepageSectionAvgOrderByAggregateInput
    _max?: HomepageSectionMaxOrderByAggregateInput
    _min?: HomepageSectionMinOrderByAggregateInput
    _sum?: HomepageSectionSumOrderByAggregateInput
  }

  export type HomepageSectionScalarWhereWithAggregatesInput = {
    AND?: HomepageSectionScalarWhereWithAggregatesInput | HomepageSectionScalarWhereWithAggregatesInput[]
    OR?: HomepageSectionScalarWhereWithAggregatesInput[]
    NOT?: HomepageSectionScalarWhereWithAggregatesInput | HomepageSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HomepageSection"> | number
    categoryId?: IntWithAggregatesFilter<"HomepageSection"> | number
    title?: StringWithAggregatesFilter<"HomepageSection"> | string
    sortOrder?: IntWithAggregatesFilter<"HomepageSection"> | number
    movieLimit?: IntWithAggregatesFilter<"HomepageSection"> | number
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    movieId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    rating?: FloatFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    movie?: MoviesOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    movieId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    rating?: FloatFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    movieId?: IntWithAggregatesFilter<"Reviews"> | number
    userId?: IntWithAggregatesFilter<"Reviews"> | number
    rating?: FloatWithAggregatesFilter<"Reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type BookmarkedMoviesWhereInput = {
    AND?: BookmarkedMoviesWhereInput | BookmarkedMoviesWhereInput[]
    OR?: BookmarkedMoviesWhereInput[]
    NOT?: BookmarkedMoviesWhereInput | BookmarkedMoviesWhereInput[]
    userId?: IntFilter<"BookmarkedMovies"> | number
    movieId?: IntFilter<"BookmarkedMovies"> | number
    bookmarkedAt?: DateTimeFilter<"BookmarkedMovies"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type BookmarkedMoviesOrderByWithRelationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    bookmarkedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    movie?: MoviesOrderByWithRelationInput
  }

  export type BookmarkedMoviesWhereUniqueInput = Prisma.AtLeast<{
    userId_movieId?: BookmarkedMoviesUserIdMovieIdCompoundUniqueInput
    AND?: BookmarkedMoviesWhereInput | BookmarkedMoviesWhereInput[]
    OR?: BookmarkedMoviesWhereInput[]
    NOT?: BookmarkedMoviesWhereInput | BookmarkedMoviesWhereInput[]
    userId?: IntFilter<"BookmarkedMovies"> | number
    movieId?: IntFilter<"BookmarkedMovies"> | number
    bookmarkedAt?: DateTimeFilter<"BookmarkedMovies"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "userId_movieId">

  export type BookmarkedMoviesOrderByWithAggregationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    bookmarkedAt?: SortOrder
    _count?: BookmarkedMoviesCountOrderByAggregateInput
    _avg?: BookmarkedMoviesAvgOrderByAggregateInput
    _max?: BookmarkedMoviesMaxOrderByAggregateInput
    _min?: BookmarkedMoviesMinOrderByAggregateInput
    _sum?: BookmarkedMoviesSumOrderByAggregateInput
  }

  export type BookmarkedMoviesScalarWhereWithAggregatesInput = {
    AND?: BookmarkedMoviesScalarWhereWithAggregatesInput | BookmarkedMoviesScalarWhereWithAggregatesInput[]
    OR?: BookmarkedMoviesScalarWhereWithAggregatesInput[]
    NOT?: BookmarkedMoviesScalarWhereWithAggregatesInput | BookmarkedMoviesScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"BookmarkedMovies"> | number
    movieId?: IntWithAggregatesFilter<"BookmarkedMovies"> | number
    bookmarkedAt?: DateTimeWithAggregatesFilter<"BookmarkedMovies"> | Date | string
  }

  export type WatchedMoviesWhereInput = {
    AND?: WatchedMoviesWhereInput | WatchedMoviesWhereInput[]
    OR?: WatchedMoviesWhereInput[]
    NOT?: WatchedMoviesWhereInput | WatchedMoviesWhereInput[]
    userId?: IntFilter<"WatchedMovies"> | number
    movieId?: IntFilter<"WatchedMovies"> | number
    watchedAt?: DateTimeFilter<"WatchedMovies"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type WatchedMoviesOrderByWithRelationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    watchedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    movie?: MoviesOrderByWithRelationInput
  }

  export type WatchedMoviesWhereUniqueInput = Prisma.AtLeast<{
    userId_movieId?: WatchedMoviesUserIdMovieIdCompoundUniqueInput
    AND?: WatchedMoviesWhereInput | WatchedMoviesWhereInput[]
    OR?: WatchedMoviesWhereInput[]
    NOT?: WatchedMoviesWhereInput | WatchedMoviesWhereInput[]
    userId?: IntFilter<"WatchedMovies"> | number
    movieId?: IntFilter<"WatchedMovies"> | number
    watchedAt?: DateTimeFilter<"WatchedMovies"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movie?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "userId_movieId">

  export type WatchedMoviesOrderByWithAggregationInput = {
    userId?: SortOrder
    movieId?: SortOrder
    watchedAt?: SortOrder
    _count?: WatchedMoviesCountOrderByAggregateInput
    _avg?: WatchedMoviesAvgOrderByAggregateInput
    _max?: WatchedMoviesMaxOrderByAggregateInput
    _min?: WatchedMoviesMinOrderByAggregateInput
    _sum?: WatchedMoviesSumOrderByAggregateInput
  }

  export type WatchedMoviesScalarWhereWithAggregatesInput = {
    AND?: WatchedMoviesScalarWhereWithAggregatesInput | WatchedMoviesScalarWhereWithAggregatesInput[]
    OR?: WatchedMoviesScalarWhereWithAggregatesInput[]
    NOT?: WatchedMoviesScalarWhereWithAggregatesInput | WatchedMoviesScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"WatchedMovies"> | number
    movieId?: IntWithAggregatesFilter<"WatchedMovies"> | number
    watchedAt?: DateTimeWithAggregatesFilter<"WatchedMovies"> | Date | string
  }

  export type FollowersWhereInput = {
    AND?: FollowersWhereInput | FollowersWhereInput[]
    OR?: FollowersWhereInput[]
    NOT?: FollowersWhereInput | FollowersWhereInput[]
    userId?: IntFilter<"Followers"> | number
    followerId?: IntFilter<"Followers"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    follower?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type FollowersOrderByWithRelationInput = {
    userId?: SortOrder
    followerId?: SortOrder
    user?: UsersOrderByWithRelationInput
    follower?: UsersOrderByWithRelationInput
  }

  export type FollowersWhereUniqueInput = Prisma.AtLeast<{
    userId_followerId?: FollowersUserIdFollowerIdCompoundUniqueInput
    AND?: FollowersWhereInput | FollowersWhereInput[]
    OR?: FollowersWhereInput[]
    NOT?: FollowersWhereInput | FollowersWhereInput[]
    userId?: IntFilter<"Followers"> | number
    followerId?: IntFilter<"Followers"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    follower?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "userId_followerId">

  export type FollowersOrderByWithAggregationInput = {
    userId?: SortOrder
    followerId?: SortOrder
    _count?: FollowersCountOrderByAggregateInput
    _avg?: FollowersAvgOrderByAggregateInput
    _max?: FollowersMaxOrderByAggregateInput
    _min?: FollowersMinOrderByAggregateInput
    _sum?: FollowersSumOrderByAggregateInput
  }

  export type FollowersScalarWhereWithAggregatesInput = {
    AND?: FollowersScalarWhereWithAggregatesInput | FollowersScalarWhereWithAggregatesInput[]
    OR?: FollowersScalarWhereWithAggregatesInput[]
    NOT?: FollowersScalarWhereWithAggregatesInput | FollowersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Followers"> | number
    followerId?: IntWithAggregatesFilter<"Followers"> | number
  }

  export type UsersCreateInput = {
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutUserInput
    followers?: FollowersCreateNestedManyWithoutFollowerInput
    following?: FollowersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutUserNestedInput
    followers?: FollowersUpdateManyWithoutFollowerNestedInput
    following?: FollowersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokensCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UsersCreateNestedOneWithoutTokensInput
  }

  export type LoginTokensUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginTokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTokensNestedInput
  }

  export type LoginTokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokensCreateManyInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginTokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesCreateInput = {
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesCreateNestedManyWithoutMovieInput
    reviews?: ReviewsCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieCreateNestedOneWithoutMovieInput
  }

  export type MoviesUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieUncheckedCreateNestedOneWithoutMovieInput
  }

  export type MoviesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUpdateOneWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUncheckedUpdateOneWithoutMovieNestedInput
  }

  export type MoviesCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
  }

  export type MoviesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    description: string
    movies?: MoviesCategoriesCreateNestedManyWithoutCategoryInput
    homepageSections?: HomepageSectionCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    movies?: MoviesCategoriesUncheckedCreateNestedManyWithoutCategoryInput
    homepageSections?: HomepageSectionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movies?: MoviesCategoriesUpdateManyWithoutCategoryNestedInput
    homepageSections?: HomepageSectionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movies?: MoviesCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
    homepageSections?: HomepageSectionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesCategoriesCreateInput = {
    movie: MoviesCreateNestedOneWithoutCategoriesInput
    category: CategoriesCreateNestedOneWithoutMoviesInput
  }

  export type MoviesCategoriesUncheckedCreateInput = {
    movieId: number
    categoryId: number
  }

  export type MoviesCategoriesUpdateInput = {
    movie?: MoviesUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoriesUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesCategoriesUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MoviesCategoriesCreateManyInput = {
    movieId: number
    categoryId: number
  }

  export type MoviesCategoriesUpdateManyMutationInput = {

  }

  export type MoviesCategoriesUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type FeaturedMovieCreateInput = {
    updatedAt?: Date | string
    movie: MoviesCreateNestedOneWithoutFeaturedMovieInput
  }

  export type FeaturedMovieUncheckedCreateInput = {
    id?: number
    movieId: number
    updatedAt?: Date | string
  }

  export type FeaturedMovieUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MoviesUpdateOneRequiredWithoutFeaturedMovieNestedInput
  }

  export type FeaturedMovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedMovieCreateManyInput = {
    id?: number
    movieId: number
    updatedAt?: Date | string
  }

  export type FeaturedMovieUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedMovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomepageSectionCreateInput = {
    title: string
    sortOrder: number
    movieLimit: number
    category: CategoriesCreateNestedOneWithoutHomepageSectionsInput
  }

  export type HomepageSectionUncheckedCreateInput = {
    id?: number
    categoryId: number
    title: string
    sortOrder: number
    movieLimit: number
  }

  export type HomepageSectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    movieLimit?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutHomepageSectionsNestedInput
  }

  export type HomepageSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    movieLimit?: IntFieldUpdateOperationsInput | number
  }

  export type HomepageSectionCreateManyInput = {
    id?: number
    categoryId: number
    title: string
    sortOrder: number
    movieLimit: number
  }

  export type HomepageSectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    movieLimit?: IntFieldUpdateOperationsInput | number
  }

  export type HomepageSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    movieLimit?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
    movie: MoviesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    movieId: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewsUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    movie?: MoviesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    movieId: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedMoviesCreateInput = {
    bookmarkedAt?: Date | string
    user: UsersCreateNestedOneWithoutBookmarksInput
    movie: MoviesCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkedMoviesUncheckedCreateInput = {
    userId: number
    movieId: number
    bookmarkedAt?: Date | string
  }

  export type BookmarkedMoviesUpdateInput = {
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookmarksNestedInput
    movie?: MoviesUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkedMoviesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedMoviesCreateManyInput = {
    userId: number
    movieId: number
    bookmarkedAt?: Date | string
  }

  export type BookmarkedMoviesUpdateManyMutationInput = {
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedMoviesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedMoviesCreateInput = {
    watchedAt?: Date | string
    user: UsersCreateNestedOneWithoutWatchedMoviesInput
    movie: MoviesCreateNestedOneWithoutWatchedMoviesInput
  }

  export type WatchedMoviesUncheckedCreateInput = {
    userId: number
    movieId: number
    watchedAt?: Date | string
  }

  export type WatchedMoviesUpdateInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutWatchedMoviesNestedInput
    movie?: MoviesUpdateOneRequiredWithoutWatchedMoviesNestedInput
  }

  export type WatchedMoviesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedMoviesCreateManyInput = {
    userId: number
    movieId: number
    watchedAt?: Date | string
  }

  export type WatchedMoviesUpdateManyMutationInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedMoviesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowersCreateInput = {
    user: UsersCreateNestedOneWithoutFollowingInput
    follower: UsersCreateNestedOneWithoutFollowersInput
  }

  export type FollowersUncheckedCreateInput = {
    userId: number
    followerId: number
  }

  export type FollowersUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutFollowingNestedInput
    follower?: UsersUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersCreateManyInput = {
    userId: number
    followerId: number
  }

  export type FollowersUpdateManyMutationInput = {

  }

  export type FollowersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LoginTokensListRelationFilter = {
    every?: LoginTokensWhereInput
    some?: LoginTokensWhereInput
    none?: LoginTokensWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type BookmarkedMoviesListRelationFilter = {
    every?: BookmarkedMoviesWhereInput
    some?: BookmarkedMoviesWhereInput
    none?: BookmarkedMoviesWhereInput
  }

  export type WatchedMoviesListRelationFilter = {
    every?: WatchedMoviesWhereInput
    some?: WatchedMoviesWhereInput
    none?: WatchedMoviesWhereInput
  }

  export type FollowersListRelationFilter = {
    every?: FollowersWhereInput
    some?: FollowersWhereInput
    none?: FollowersWhereInput
  }

  export type LoginTokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkedMoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchedMoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type LoginTokensCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LoginTokensAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LoginTokensMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LoginTokensMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LoginTokensSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MoviesCategoriesListRelationFilter = {
    every?: MoviesCategoriesWhereInput
    some?: MoviesCategoriesWhereInput
    none?: MoviesCategoriesWhereInput
  }

  export type FeaturedMovieNullableScalarRelationFilter = {
    is?: FeaturedMovieWhereInput | null
    isNot?: FeaturedMovieWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MoviesCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    imageUrl?: SortOrder
    posterUrl?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
    created_at?: SortOrder
  }

  export type MoviesAvgOrderByAggregateInput = {
    id?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
  }

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    imageUrl?: SortOrder
    posterUrl?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
    created_at?: SortOrder
  }

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    imageUrl?: SortOrder
    posterUrl?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    releaseDate?: SortOrder
    created_at?: SortOrder
  }

  export type MoviesSumOrderByAggregateInput = {
    id?: SortOrder
    release_year?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type HomepageSectionListRelationFilter = {
    every?: HomepageSectionWhereInput
    some?: HomepageSectionWhereInput
    none?: HomepageSectionWhereInput
  }

  export type HomepageSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoviesScalarRelationFilter = {
    is?: MoviesWhereInput
    isNot?: MoviesWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type MoviesCategoriesMovieIdCategoryIdCompoundUniqueInput = {
    movieId: number
    categoryId: number
  }

  export type MoviesCategoriesCountOrderByAggregateInput = {
    movieId?: SortOrder
    categoryId?: SortOrder
  }

  export type MoviesCategoriesAvgOrderByAggregateInput = {
    movieId?: SortOrder
    categoryId?: SortOrder
  }

  export type MoviesCategoriesMaxOrderByAggregateInput = {
    movieId?: SortOrder
    categoryId?: SortOrder
  }

  export type MoviesCategoriesMinOrderByAggregateInput = {
    movieId?: SortOrder
    categoryId?: SortOrder
  }

  export type MoviesCategoriesSumOrderByAggregateInput = {
    movieId?: SortOrder
    categoryId?: SortOrder
  }

  export type FeaturedMovieCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedMovieAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type FeaturedMovieMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedMovieMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedMovieSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type HomepageSectionCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    movieLimit?: SortOrder
  }

  export type HomepageSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sortOrder?: SortOrder
    movieLimit?: SortOrder
  }

  export type HomepageSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    movieLimit?: SortOrder
  }

  export type HomepageSectionMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    movieLimit?: SortOrder
  }

  export type HomepageSectionSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    sortOrder?: SortOrder
    movieLimit?: SortOrder
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type BookmarkedMoviesUserIdMovieIdCompoundUniqueInput = {
    userId: number
    movieId: number
  }

  export type BookmarkedMoviesCountOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    bookmarkedAt?: SortOrder
  }

  export type BookmarkedMoviesAvgOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type BookmarkedMoviesMaxOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    bookmarkedAt?: SortOrder
  }

  export type BookmarkedMoviesMinOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    bookmarkedAt?: SortOrder
  }

  export type BookmarkedMoviesSumOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type WatchedMoviesUserIdMovieIdCompoundUniqueInput = {
    userId: number
    movieId: number
  }

  export type WatchedMoviesCountOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    watchedAt?: SortOrder
  }

  export type WatchedMoviesAvgOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type WatchedMoviesMaxOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    watchedAt?: SortOrder
  }

  export type WatchedMoviesMinOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
    watchedAt?: SortOrder
  }

  export type WatchedMoviesSumOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type FollowersUserIdFollowerIdCompoundUniqueInput = {
    userId: number
    followerId: number
  }

  export type FollowersCountOrderByAggregateInput = {
    userId?: SortOrder
    followerId?: SortOrder
  }

  export type FollowersAvgOrderByAggregateInput = {
    userId?: SortOrder
    followerId?: SortOrder
  }

  export type FollowersMaxOrderByAggregateInput = {
    userId?: SortOrder
    followerId?: SortOrder
  }

  export type FollowersMinOrderByAggregateInput = {
    userId?: SortOrder
    followerId?: SortOrder
  }

  export type FollowersSumOrderByAggregateInput = {
    userId?: SortOrder
    followerId?: SortOrder
  }

  export type LoginTokensCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginTokensCreateWithoutUserInput, LoginTokensUncheckedCreateWithoutUserInput> | LoginTokensCreateWithoutUserInput[] | LoginTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginTokensCreateOrConnectWithoutUserInput | LoginTokensCreateOrConnectWithoutUserInput[]
    createMany?: LoginTokensCreateManyUserInputEnvelope
    connect?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BookmarkedMoviesCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutUserInput, BookmarkedMoviesUncheckedCreateWithoutUserInput> | BookmarkedMoviesCreateWithoutUserInput[] | BookmarkedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutUserInput | BookmarkedMoviesCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkedMoviesCreateManyUserInputEnvelope
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
  }

  export type WatchedMoviesCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedMoviesCreateWithoutUserInput, WatchedMoviesUncheckedCreateWithoutUserInput> | WatchedMoviesCreateWithoutUserInput[] | WatchedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutUserInput | WatchedMoviesCreateOrConnectWithoutUserInput[]
    createMany?: WatchedMoviesCreateManyUserInputEnvelope
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
  }

  export type FollowersCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowersCreateWithoutFollowerInput, FollowersUncheckedCreateWithoutFollowerInput> | FollowersCreateWithoutFollowerInput[] | FollowersUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowerInput | FollowersCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowersCreateManyFollowerInputEnvelope
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
  }

  export type FollowersCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowersCreateWithoutUserInput, FollowersUncheckedCreateWithoutUserInput> | FollowersCreateWithoutUserInput[] | FollowersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutUserInput | FollowersCreateOrConnectWithoutUserInput[]
    createMany?: FollowersCreateManyUserInputEnvelope
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
  }

  export type LoginTokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginTokensCreateWithoutUserInput, LoginTokensUncheckedCreateWithoutUserInput> | LoginTokensCreateWithoutUserInput[] | LoginTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginTokensCreateOrConnectWithoutUserInput | LoginTokensCreateOrConnectWithoutUserInput[]
    createMany?: LoginTokensCreateManyUserInputEnvelope
    connect?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BookmarkedMoviesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutUserInput, BookmarkedMoviesUncheckedCreateWithoutUserInput> | BookmarkedMoviesCreateWithoutUserInput[] | BookmarkedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutUserInput | BookmarkedMoviesCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkedMoviesCreateManyUserInputEnvelope
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
  }

  export type WatchedMoviesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedMoviesCreateWithoutUserInput, WatchedMoviesUncheckedCreateWithoutUserInput> | WatchedMoviesCreateWithoutUserInput[] | WatchedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutUserInput | WatchedMoviesCreateOrConnectWithoutUserInput[]
    createMany?: WatchedMoviesCreateManyUserInputEnvelope
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
  }

  export type FollowersUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowersCreateWithoutFollowerInput, FollowersUncheckedCreateWithoutFollowerInput> | FollowersCreateWithoutFollowerInput[] | FollowersUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowerInput | FollowersCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowersCreateManyFollowerInputEnvelope
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
  }

  export type FollowersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowersCreateWithoutUserInput, FollowersUncheckedCreateWithoutUserInput> | FollowersCreateWithoutUserInput[] | FollowersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutUserInput | FollowersCreateOrConnectWithoutUserInput[]
    createMany?: FollowersCreateManyUserInputEnvelope
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LoginTokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginTokensCreateWithoutUserInput, LoginTokensUncheckedCreateWithoutUserInput> | LoginTokensCreateWithoutUserInput[] | LoginTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginTokensCreateOrConnectWithoutUserInput | LoginTokensCreateOrConnectWithoutUserInput[]
    upsert?: LoginTokensUpsertWithWhereUniqueWithoutUserInput | LoginTokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginTokensCreateManyUserInputEnvelope
    set?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    disconnect?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    delete?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    connect?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    update?: LoginTokensUpdateWithWhereUniqueWithoutUserInput | LoginTokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginTokensUpdateManyWithWhereWithoutUserInput | LoginTokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginTokensScalarWhereInput | LoginTokensScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BookmarkedMoviesUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutUserInput, BookmarkedMoviesUncheckedCreateWithoutUserInput> | BookmarkedMoviesCreateWithoutUserInput[] | BookmarkedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutUserInput | BookmarkedMoviesCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkedMoviesUpsertWithWhereUniqueWithoutUserInput | BookmarkedMoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkedMoviesCreateManyUserInputEnvelope
    set?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    disconnect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    delete?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    update?: BookmarkedMoviesUpdateWithWhereUniqueWithoutUserInput | BookmarkedMoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkedMoviesUpdateManyWithWhereWithoutUserInput | BookmarkedMoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkedMoviesScalarWhereInput | BookmarkedMoviesScalarWhereInput[]
  }

  export type WatchedMoviesUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedMoviesCreateWithoutUserInput, WatchedMoviesUncheckedCreateWithoutUserInput> | WatchedMoviesCreateWithoutUserInput[] | WatchedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutUserInput | WatchedMoviesCreateOrConnectWithoutUserInput[]
    upsert?: WatchedMoviesUpsertWithWhereUniqueWithoutUserInput | WatchedMoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedMoviesCreateManyUserInputEnvelope
    set?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    disconnect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    delete?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    update?: WatchedMoviesUpdateWithWhereUniqueWithoutUserInput | WatchedMoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedMoviesUpdateManyWithWhereWithoutUserInput | WatchedMoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedMoviesScalarWhereInput | WatchedMoviesScalarWhereInput[]
  }

  export type FollowersUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowersCreateWithoutFollowerInput, FollowersUncheckedCreateWithoutFollowerInput> | FollowersCreateWithoutFollowerInput[] | FollowersUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowerInput | FollowersCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowersUpsertWithWhereUniqueWithoutFollowerInput | FollowersUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowersCreateManyFollowerInputEnvelope
    set?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    disconnect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    delete?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    update?: FollowersUpdateWithWhereUniqueWithoutFollowerInput | FollowersUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowersUpdateManyWithWhereWithoutFollowerInput | FollowersUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
  }

  export type FollowersUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowersCreateWithoutUserInput, FollowersUncheckedCreateWithoutUserInput> | FollowersCreateWithoutUserInput[] | FollowersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutUserInput | FollowersCreateOrConnectWithoutUserInput[]
    upsert?: FollowersUpsertWithWhereUniqueWithoutUserInput | FollowersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowersCreateManyUserInputEnvelope
    set?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    disconnect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    delete?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    update?: FollowersUpdateWithWhereUniqueWithoutUserInput | FollowersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowersUpdateManyWithWhereWithoutUserInput | FollowersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LoginTokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginTokensCreateWithoutUserInput, LoginTokensUncheckedCreateWithoutUserInput> | LoginTokensCreateWithoutUserInput[] | LoginTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginTokensCreateOrConnectWithoutUserInput | LoginTokensCreateOrConnectWithoutUserInput[]
    upsert?: LoginTokensUpsertWithWhereUniqueWithoutUserInput | LoginTokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginTokensCreateManyUserInputEnvelope
    set?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    disconnect?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    delete?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    connect?: LoginTokensWhereUniqueInput | LoginTokensWhereUniqueInput[]
    update?: LoginTokensUpdateWithWhereUniqueWithoutUserInput | LoginTokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginTokensUpdateManyWithWhereWithoutUserInput | LoginTokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginTokensScalarWhereInput | LoginTokensScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BookmarkedMoviesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutUserInput, BookmarkedMoviesUncheckedCreateWithoutUserInput> | BookmarkedMoviesCreateWithoutUserInput[] | BookmarkedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutUserInput | BookmarkedMoviesCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkedMoviesUpsertWithWhereUniqueWithoutUserInput | BookmarkedMoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkedMoviesCreateManyUserInputEnvelope
    set?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    disconnect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    delete?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    update?: BookmarkedMoviesUpdateWithWhereUniqueWithoutUserInput | BookmarkedMoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkedMoviesUpdateManyWithWhereWithoutUserInput | BookmarkedMoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkedMoviesScalarWhereInput | BookmarkedMoviesScalarWhereInput[]
  }

  export type WatchedMoviesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedMoviesCreateWithoutUserInput, WatchedMoviesUncheckedCreateWithoutUserInput> | WatchedMoviesCreateWithoutUserInput[] | WatchedMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutUserInput | WatchedMoviesCreateOrConnectWithoutUserInput[]
    upsert?: WatchedMoviesUpsertWithWhereUniqueWithoutUserInput | WatchedMoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedMoviesCreateManyUserInputEnvelope
    set?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    disconnect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    delete?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    update?: WatchedMoviesUpdateWithWhereUniqueWithoutUserInput | WatchedMoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedMoviesUpdateManyWithWhereWithoutUserInput | WatchedMoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedMoviesScalarWhereInput | WatchedMoviesScalarWhereInput[]
  }

  export type FollowersUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowersCreateWithoutFollowerInput, FollowersUncheckedCreateWithoutFollowerInput> | FollowersCreateWithoutFollowerInput[] | FollowersUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowerInput | FollowersCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowersUpsertWithWhereUniqueWithoutFollowerInput | FollowersUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowersCreateManyFollowerInputEnvelope
    set?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    disconnect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    delete?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    update?: FollowersUpdateWithWhereUniqueWithoutFollowerInput | FollowersUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowersUpdateManyWithWhereWithoutFollowerInput | FollowersUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
  }

  export type FollowersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowersCreateWithoutUserInput, FollowersUncheckedCreateWithoutUserInput> | FollowersCreateWithoutUserInput[] | FollowersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutUserInput | FollowersCreateOrConnectWithoutUserInput[]
    upsert?: FollowersUpsertWithWhereUniqueWithoutUserInput | FollowersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowersCreateManyUserInputEnvelope
    set?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    disconnect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    delete?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    update?: FollowersUpdateWithWhereUniqueWithoutUserInput | FollowersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowersUpdateManyWithWhereWithoutUserInput | FollowersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTokensInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTokensInput
    upsert?: UsersUpsertWithoutTokensInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTokensInput, UsersUpdateWithoutTokensInput>, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type MoviesCategoriesCreateNestedManyWithoutMovieInput = {
    create?: XOR<MoviesCategoriesCreateWithoutMovieInput, MoviesCategoriesUncheckedCreateWithoutMovieInput> | MoviesCategoriesCreateWithoutMovieInput[] | MoviesCategoriesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutMovieInput | MoviesCategoriesCreateOrConnectWithoutMovieInput[]
    createMany?: MoviesCategoriesCreateManyMovieInputEnvelope
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutMovieInput = {
    create?: XOR<ReviewsCreateWithoutMovieInput, ReviewsUncheckedCreateWithoutMovieInput> | ReviewsCreateWithoutMovieInput[] | ReviewsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMovieInput | ReviewsCreateOrConnectWithoutMovieInput[]
    createMany?: ReviewsCreateManyMovieInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BookmarkedMoviesCreateNestedManyWithoutMovieInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutMovieInput, BookmarkedMoviesUncheckedCreateWithoutMovieInput> | BookmarkedMoviesCreateWithoutMovieInput[] | BookmarkedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutMovieInput | BookmarkedMoviesCreateOrConnectWithoutMovieInput[]
    createMany?: BookmarkedMoviesCreateManyMovieInputEnvelope
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
  }

  export type WatchedMoviesCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchedMoviesCreateWithoutMovieInput, WatchedMoviesUncheckedCreateWithoutMovieInput> | WatchedMoviesCreateWithoutMovieInput[] | WatchedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutMovieInput | WatchedMoviesCreateOrConnectWithoutMovieInput[]
    createMany?: WatchedMoviesCreateManyMovieInputEnvelope
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
  }

  export type FeaturedMovieCreateNestedOneWithoutMovieInput = {
    create?: XOR<FeaturedMovieCreateWithoutMovieInput, FeaturedMovieUncheckedCreateWithoutMovieInput>
    connectOrCreate?: FeaturedMovieCreateOrConnectWithoutMovieInput
    connect?: FeaturedMovieWhereUniqueInput
  }

  export type MoviesCategoriesUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MoviesCategoriesCreateWithoutMovieInput, MoviesCategoriesUncheckedCreateWithoutMovieInput> | MoviesCategoriesCreateWithoutMovieInput[] | MoviesCategoriesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutMovieInput | MoviesCategoriesCreateOrConnectWithoutMovieInput[]
    createMany?: MoviesCategoriesCreateManyMovieInputEnvelope
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<ReviewsCreateWithoutMovieInput, ReviewsUncheckedCreateWithoutMovieInput> | ReviewsCreateWithoutMovieInput[] | ReviewsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMovieInput | ReviewsCreateOrConnectWithoutMovieInput[]
    createMany?: ReviewsCreateManyMovieInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BookmarkedMoviesUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutMovieInput, BookmarkedMoviesUncheckedCreateWithoutMovieInput> | BookmarkedMoviesCreateWithoutMovieInput[] | BookmarkedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutMovieInput | BookmarkedMoviesCreateOrConnectWithoutMovieInput[]
    createMany?: BookmarkedMoviesCreateManyMovieInputEnvelope
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
  }

  export type WatchedMoviesUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchedMoviesCreateWithoutMovieInput, WatchedMoviesUncheckedCreateWithoutMovieInput> | WatchedMoviesCreateWithoutMovieInput[] | WatchedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutMovieInput | WatchedMoviesCreateOrConnectWithoutMovieInput[]
    createMany?: WatchedMoviesCreateManyMovieInputEnvelope
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
  }

  export type FeaturedMovieUncheckedCreateNestedOneWithoutMovieInput = {
    create?: XOR<FeaturedMovieCreateWithoutMovieInput, FeaturedMovieUncheckedCreateWithoutMovieInput>
    connectOrCreate?: FeaturedMovieCreateOrConnectWithoutMovieInput
    connect?: FeaturedMovieWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MoviesCategoriesUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MoviesCategoriesCreateWithoutMovieInput, MoviesCategoriesUncheckedCreateWithoutMovieInput> | MoviesCategoriesCreateWithoutMovieInput[] | MoviesCategoriesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutMovieInput | MoviesCategoriesCreateOrConnectWithoutMovieInput[]
    upsert?: MoviesCategoriesUpsertWithWhereUniqueWithoutMovieInput | MoviesCategoriesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MoviesCategoriesCreateManyMovieInputEnvelope
    set?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    disconnect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    delete?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    update?: MoviesCategoriesUpdateWithWhereUniqueWithoutMovieInput | MoviesCategoriesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MoviesCategoriesUpdateManyWithWhereWithoutMovieInput | MoviesCategoriesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MoviesCategoriesScalarWhereInput | MoviesCategoriesScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ReviewsCreateWithoutMovieInput, ReviewsUncheckedCreateWithoutMovieInput> | ReviewsCreateWithoutMovieInput[] | ReviewsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMovieInput | ReviewsCreateOrConnectWithoutMovieInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutMovieInput | ReviewsUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ReviewsCreateManyMovieInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutMovieInput | ReviewsUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutMovieInput | ReviewsUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BookmarkedMoviesUpdateManyWithoutMovieNestedInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutMovieInput, BookmarkedMoviesUncheckedCreateWithoutMovieInput> | BookmarkedMoviesCreateWithoutMovieInput[] | BookmarkedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutMovieInput | BookmarkedMoviesCreateOrConnectWithoutMovieInput[]
    upsert?: BookmarkedMoviesUpsertWithWhereUniqueWithoutMovieInput | BookmarkedMoviesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: BookmarkedMoviesCreateManyMovieInputEnvelope
    set?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    disconnect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    delete?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    update?: BookmarkedMoviesUpdateWithWhereUniqueWithoutMovieInput | BookmarkedMoviesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: BookmarkedMoviesUpdateManyWithWhereWithoutMovieInput | BookmarkedMoviesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: BookmarkedMoviesScalarWhereInput | BookmarkedMoviesScalarWhereInput[]
  }

  export type WatchedMoviesUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchedMoviesCreateWithoutMovieInput, WatchedMoviesUncheckedCreateWithoutMovieInput> | WatchedMoviesCreateWithoutMovieInput[] | WatchedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutMovieInput | WatchedMoviesCreateOrConnectWithoutMovieInput[]
    upsert?: WatchedMoviesUpsertWithWhereUniqueWithoutMovieInput | WatchedMoviesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchedMoviesCreateManyMovieInputEnvelope
    set?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    disconnect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    delete?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    update?: WatchedMoviesUpdateWithWhereUniqueWithoutMovieInput | WatchedMoviesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchedMoviesUpdateManyWithWhereWithoutMovieInput | WatchedMoviesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchedMoviesScalarWhereInput | WatchedMoviesScalarWhereInput[]
  }

  export type FeaturedMovieUpdateOneWithoutMovieNestedInput = {
    create?: XOR<FeaturedMovieCreateWithoutMovieInput, FeaturedMovieUncheckedCreateWithoutMovieInput>
    connectOrCreate?: FeaturedMovieCreateOrConnectWithoutMovieInput
    upsert?: FeaturedMovieUpsertWithoutMovieInput
    disconnect?: FeaturedMovieWhereInput | boolean
    delete?: FeaturedMovieWhereInput | boolean
    connect?: FeaturedMovieWhereUniqueInput
    update?: XOR<XOR<FeaturedMovieUpdateToOneWithWhereWithoutMovieInput, FeaturedMovieUpdateWithoutMovieInput>, FeaturedMovieUncheckedUpdateWithoutMovieInput>
  }

  export type MoviesCategoriesUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MoviesCategoriesCreateWithoutMovieInput, MoviesCategoriesUncheckedCreateWithoutMovieInput> | MoviesCategoriesCreateWithoutMovieInput[] | MoviesCategoriesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutMovieInput | MoviesCategoriesCreateOrConnectWithoutMovieInput[]
    upsert?: MoviesCategoriesUpsertWithWhereUniqueWithoutMovieInput | MoviesCategoriesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MoviesCategoriesCreateManyMovieInputEnvelope
    set?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    disconnect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    delete?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    update?: MoviesCategoriesUpdateWithWhereUniqueWithoutMovieInput | MoviesCategoriesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MoviesCategoriesUpdateManyWithWhereWithoutMovieInput | MoviesCategoriesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MoviesCategoriesScalarWhereInput | MoviesCategoriesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ReviewsCreateWithoutMovieInput, ReviewsUncheckedCreateWithoutMovieInput> | ReviewsCreateWithoutMovieInput[] | ReviewsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMovieInput | ReviewsCreateOrConnectWithoutMovieInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutMovieInput | ReviewsUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ReviewsCreateManyMovieInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutMovieInput | ReviewsUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutMovieInput | ReviewsUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BookmarkedMoviesUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<BookmarkedMoviesCreateWithoutMovieInput, BookmarkedMoviesUncheckedCreateWithoutMovieInput> | BookmarkedMoviesCreateWithoutMovieInput[] | BookmarkedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: BookmarkedMoviesCreateOrConnectWithoutMovieInput | BookmarkedMoviesCreateOrConnectWithoutMovieInput[]
    upsert?: BookmarkedMoviesUpsertWithWhereUniqueWithoutMovieInput | BookmarkedMoviesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: BookmarkedMoviesCreateManyMovieInputEnvelope
    set?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    disconnect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    delete?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    connect?: BookmarkedMoviesWhereUniqueInput | BookmarkedMoviesWhereUniqueInput[]
    update?: BookmarkedMoviesUpdateWithWhereUniqueWithoutMovieInput | BookmarkedMoviesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: BookmarkedMoviesUpdateManyWithWhereWithoutMovieInput | BookmarkedMoviesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: BookmarkedMoviesScalarWhereInput | BookmarkedMoviesScalarWhereInput[]
  }

  export type WatchedMoviesUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchedMoviesCreateWithoutMovieInput, WatchedMoviesUncheckedCreateWithoutMovieInput> | WatchedMoviesCreateWithoutMovieInput[] | WatchedMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchedMoviesCreateOrConnectWithoutMovieInput | WatchedMoviesCreateOrConnectWithoutMovieInput[]
    upsert?: WatchedMoviesUpsertWithWhereUniqueWithoutMovieInput | WatchedMoviesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchedMoviesCreateManyMovieInputEnvelope
    set?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    disconnect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    delete?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    connect?: WatchedMoviesWhereUniqueInput | WatchedMoviesWhereUniqueInput[]
    update?: WatchedMoviesUpdateWithWhereUniqueWithoutMovieInput | WatchedMoviesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchedMoviesUpdateManyWithWhereWithoutMovieInput | WatchedMoviesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchedMoviesScalarWhereInput | WatchedMoviesScalarWhereInput[]
  }

  export type FeaturedMovieUncheckedUpdateOneWithoutMovieNestedInput = {
    create?: XOR<FeaturedMovieCreateWithoutMovieInput, FeaturedMovieUncheckedCreateWithoutMovieInput>
    connectOrCreate?: FeaturedMovieCreateOrConnectWithoutMovieInput
    upsert?: FeaturedMovieUpsertWithoutMovieInput
    disconnect?: FeaturedMovieWhereInput | boolean
    delete?: FeaturedMovieWhereInput | boolean
    connect?: FeaturedMovieWhereUniqueInput
    update?: XOR<XOR<FeaturedMovieUpdateToOneWithWhereWithoutMovieInput, FeaturedMovieUpdateWithoutMovieInput>, FeaturedMovieUncheckedUpdateWithoutMovieInput>
  }

  export type MoviesCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MoviesCategoriesCreateWithoutCategoryInput, MoviesCategoriesUncheckedCreateWithoutCategoryInput> | MoviesCategoriesCreateWithoutCategoryInput[] | MoviesCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutCategoryInput | MoviesCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: MoviesCategoriesCreateManyCategoryInputEnvelope
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
  }

  export type HomepageSectionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HomepageSectionCreateWithoutCategoryInput, HomepageSectionUncheckedCreateWithoutCategoryInput> | HomepageSectionCreateWithoutCategoryInput[] | HomepageSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HomepageSectionCreateOrConnectWithoutCategoryInput | HomepageSectionCreateOrConnectWithoutCategoryInput[]
    createMany?: HomepageSectionCreateManyCategoryInputEnvelope
    connect?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
  }

  export type MoviesCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MoviesCategoriesCreateWithoutCategoryInput, MoviesCategoriesUncheckedCreateWithoutCategoryInput> | MoviesCategoriesCreateWithoutCategoryInput[] | MoviesCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutCategoryInput | MoviesCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: MoviesCategoriesCreateManyCategoryInputEnvelope
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
  }

  export type HomepageSectionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HomepageSectionCreateWithoutCategoryInput, HomepageSectionUncheckedCreateWithoutCategoryInput> | HomepageSectionCreateWithoutCategoryInput[] | HomepageSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HomepageSectionCreateOrConnectWithoutCategoryInput | HomepageSectionCreateOrConnectWithoutCategoryInput[]
    createMany?: HomepageSectionCreateManyCategoryInputEnvelope
    connect?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
  }

  export type MoviesCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MoviesCategoriesCreateWithoutCategoryInput, MoviesCategoriesUncheckedCreateWithoutCategoryInput> | MoviesCategoriesCreateWithoutCategoryInput[] | MoviesCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutCategoryInput | MoviesCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: MoviesCategoriesUpsertWithWhereUniqueWithoutCategoryInput | MoviesCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MoviesCategoriesCreateManyCategoryInputEnvelope
    set?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    disconnect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    delete?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    update?: MoviesCategoriesUpdateWithWhereUniqueWithoutCategoryInput | MoviesCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MoviesCategoriesUpdateManyWithWhereWithoutCategoryInput | MoviesCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MoviesCategoriesScalarWhereInput | MoviesCategoriesScalarWhereInput[]
  }

  export type HomepageSectionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HomepageSectionCreateWithoutCategoryInput, HomepageSectionUncheckedCreateWithoutCategoryInput> | HomepageSectionCreateWithoutCategoryInput[] | HomepageSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HomepageSectionCreateOrConnectWithoutCategoryInput | HomepageSectionCreateOrConnectWithoutCategoryInput[]
    upsert?: HomepageSectionUpsertWithWhereUniqueWithoutCategoryInput | HomepageSectionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HomepageSectionCreateManyCategoryInputEnvelope
    set?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    disconnect?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    delete?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    connect?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    update?: HomepageSectionUpdateWithWhereUniqueWithoutCategoryInput | HomepageSectionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HomepageSectionUpdateManyWithWhereWithoutCategoryInput | HomepageSectionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HomepageSectionScalarWhereInput | HomepageSectionScalarWhereInput[]
  }

  export type MoviesCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MoviesCategoriesCreateWithoutCategoryInput, MoviesCategoriesUncheckedCreateWithoutCategoryInput> | MoviesCategoriesCreateWithoutCategoryInput[] | MoviesCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MoviesCategoriesCreateOrConnectWithoutCategoryInput | MoviesCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: MoviesCategoriesUpsertWithWhereUniqueWithoutCategoryInput | MoviesCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MoviesCategoriesCreateManyCategoryInputEnvelope
    set?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    disconnect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    delete?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    connect?: MoviesCategoriesWhereUniqueInput | MoviesCategoriesWhereUniqueInput[]
    update?: MoviesCategoriesUpdateWithWhereUniqueWithoutCategoryInput | MoviesCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MoviesCategoriesUpdateManyWithWhereWithoutCategoryInput | MoviesCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MoviesCategoriesScalarWhereInput | MoviesCategoriesScalarWhereInput[]
  }

  export type HomepageSectionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HomepageSectionCreateWithoutCategoryInput, HomepageSectionUncheckedCreateWithoutCategoryInput> | HomepageSectionCreateWithoutCategoryInput[] | HomepageSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HomepageSectionCreateOrConnectWithoutCategoryInput | HomepageSectionCreateOrConnectWithoutCategoryInput[]
    upsert?: HomepageSectionUpsertWithWhereUniqueWithoutCategoryInput | HomepageSectionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HomepageSectionCreateManyCategoryInputEnvelope
    set?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    disconnect?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    delete?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    connect?: HomepageSectionWhereUniqueInput | HomepageSectionWhereUniqueInput[]
    update?: HomepageSectionUpdateWithWhereUniqueWithoutCategoryInput | HomepageSectionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HomepageSectionUpdateManyWithWhereWithoutCategoryInput | HomepageSectionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HomepageSectionScalarWhereInput | HomepageSectionScalarWhereInput[]
  }

  export type MoviesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<MoviesCreateWithoutCategoriesInput, MoviesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutCategoriesInput
    connect?: MoviesWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutMoviesInput = {
    create?: XOR<CategoriesCreateWithoutMoviesInput, CategoriesUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMoviesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type MoviesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<MoviesCreateWithoutCategoriesInput, MoviesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutCategoriesInput
    upsert?: MoviesUpsertWithoutCategoriesInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutCategoriesInput, MoviesUpdateWithoutCategoriesInput>, MoviesUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoriesUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<CategoriesCreateWithoutMoviesInput, CategoriesUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMoviesInput
    upsert?: CategoriesUpsertWithoutMoviesInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutMoviesInput, CategoriesUpdateWithoutMoviesInput>, CategoriesUncheckedUpdateWithoutMoviesInput>
  }

  export type MoviesCreateNestedOneWithoutFeaturedMovieInput = {
    create?: XOR<MoviesCreateWithoutFeaturedMovieInput, MoviesUncheckedCreateWithoutFeaturedMovieInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutFeaturedMovieInput
    connect?: MoviesWhereUniqueInput
  }

  export type MoviesUpdateOneRequiredWithoutFeaturedMovieNestedInput = {
    create?: XOR<MoviesCreateWithoutFeaturedMovieInput, MoviesUncheckedCreateWithoutFeaturedMovieInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutFeaturedMovieInput
    upsert?: MoviesUpsertWithoutFeaturedMovieInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutFeaturedMovieInput, MoviesUpdateWithoutFeaturedMovieInput>, MoviesUncheckedUpdateWithoutFeaturedMovieInput>
  }

  export type CategoriesCreateNestedOneWithoutHomepageSectionsInput = {
    create?: XOR<CategoriesCreateWithoutHomepageSectionsInput, CategoriesUncheckedCreateWithoutHomepageSectionsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutHomepageSectionsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type CategoriesUpdateOneRequiredWithoutHomepageSectionsNestedInput = {
    create?: XOR<CategoriesCreateWithoutHomepageSectionsInput, CategoriesUncheckedCreateWithoutHomepageSectionsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutHomepageSectionsInput
    upsert?: CategoriesUpsertWithoutHomepageSectionsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutHomepageSectionsInput, CategoriesUpdateWithoutHomepageSectionsInput>, CategoriesUncheckedUpdateWithoutHomepageSectionsInput>
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type MoviesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutReviewsInput
    connect?: MoviesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type MoviesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutReviewsInput
    upsert?: MoviesUpsertWithoutReviewsInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutReviewsInput, MoviesUpdateWithoutReviewsInput>, MoviesUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UsersCreateWithoutBookmarksInput, UsersUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookmarksInput
    connect?: UsersWhereUniqueInput
  }

  export type MoviesCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<MoviesCreateWithoutBookmarksInput, MoviesUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutBookmarksInput
    connect?: MoviesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UsersCreateWithoutBookmarksInput, UsersUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookmarksInput
    upsert?: UsersUpsertWithoutBookmarksInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookmarksInput, UsersUpdateWithoutBookmarksInput>, UsersUncheckedUpdateWithoutBookmarksInput>
  }

  export type MoviesUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<MoviesCreateWithoutBookmarksInput, MoviesUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutBookmarksInput
    upsert?: MoviesUpsertWithoutBookmarksInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutBookmarksInput, MoviesUpdateWithoutBookmarksInput>, MoviesUncheckedUpdateWithoutBookmarksInput>
  }

  export type UsersCreateNestedOneWithoutWatchedMoviesInput = {
    create?: XOR<UsersCreateWithoutWatchedMoviesInput, UsersUncheckedCreateWithoutWatchedMoviesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWatchedMoviesInput
    connect?: UsersWhereUniqueInput
  }

  export type MoviesCreateNestedOneWithoutWatchedMoviesInput = {
    create?: XOR<MoviesCreateWithoutWatchedMoviesInput, MoviesUncheckedCreateWithoutWatchedMoviesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutWatchedMoviesInput
    connect?: MoviesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutWatchedMoviesNestedInput = {
    create?: XOR<UsersCreateWithoutWatchedMoviesInput, UsersUncheckedCreateWithoutWatchedMoviesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWatchedMoviesInput
    upsert?: UsersUpsertWithoutWatchedMoviesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWatchedMoviesInput, UsersUpdateWithoutWatchedMoviesInput>, UsersUncheckedUpdateWithoutWatchedMoviesInput>
  }

  export type MoviesUpdateOneRequiredWithoutWatchedMoviesNestedInput = {
    create?: XOR<MoviesCreateWithoutWatchedMoviesInput, MoviesUncheckedCreateWithoutWatchedMoviesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutWatchedMoviesInput
    upsert?: MoviesUpsertWithoutWatchedMoviesInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutWatchedMoviesInput, MoviesUpdateWithoutWatchedMoviesInput>, MoviesUncheckedUpdateWithoutWatchedMoviesInput>
  }

  export type UsersCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput
    upsert?: UsersUpsertWithoutFollowingInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollowingInput, UsersUpdateWithoutFollowingInput>, UsersUncheckedUpdateWithoutFollowingInput>
  }

  export type UsersUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput
    upsert?: UsersUpsertWithoutFollowersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollowersInput, UsersUpdateWithoutFollowersInput>, UsersUncheckedUpdateWithoutFollowersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LoginTokensCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginTokensUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginTokensCreateOrConnectWithoutUserInput = {
    where: LoginTokensWhereUniqueInput
    create: XOR<LoginTokensCreateWithoutUserInput, LoginTokensUncheckedCreateWithoutUserInput>
  }

  export type LoginTokensCreateManyUserInputEnvelope = {
    data: LoginTokensCreateManyUserInput | LoginTokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    movie: MoviesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkedMoviesCreateWithoutUserInput = {
    bookmarkedAt?: Date | string
    movie: MoviesCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkedMoviesUncheckedCreateWithoutUserInput = {
    movieId: number
    bookmarkedAt?: Date | string
  }

  export type BookmarkedMoviesCreateOrConnectWithoutUserInput = {
    where: BookmarkedMoviesWhereUniqueInput
    create: XOR<BookmarkedMoviesCreateWithoutUserInput, BookmarkedMoviesUncheckedCreateWithoutUserInput>
  }

  export type BookmarkedMoviesCreateManyUserInputEnvelope = {
    data: BookmarkedMoviesCreateManyUserInput | BookmarkedMoviesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchedMoviesCreateWithoutUserInput = {
    watchedAt?: Date | string
    movie: MoviesCreateNestedOneWithoutWatchedMoviesInput
  }

  export type WatchedMoviesUncheckedCreateWithoutUserInput = {
    movieId: number
    watchedAt?: Date | string
  }

  export type WatchedMoviesCreateOrConnectWithoutUserInput = {
    where: WatchedMoviesWhereUniqueInput
    create: XOR<WatchedMoviesCreateWithoutUserInput, WatchedMoviesUncheckedCreateWithoutUserInput>
  }

  export type WatchedMoviesCreateManyUserInputEnvelope = {
    data: WatchedMoviesCreateManyUserInput | WatchedMoviesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowersCreateWithoutFollowerInput = {
    user: UsersCreateNestedOneWithoutFollowingInput
  }

  export type FollowersUncheckedCreateWithoutFollowerInput = {
    userId: number
  }

  export type FollowersCreateOrConnectWithoutFollowerInput = {
    where: FollowersWhereUniqueInput
    create: XOR<FollowersCreateWithoutFollowerInput, FollowersUncheckedCreateWithoutFollowerInput>
  }

  export type FollowersCreateManyFollowerInputEnvelope = {
    data: FollowersCreateManyFollowerInput | FollowersCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type FollowersCreateWithoutUserInput = {
    follower: UsersCreateNestedOneWithoutFollowersInput
  }

  export type FollowersUncheckedCreateWithoutUserInput = {
    followerId: number
  }

  export type FollowersCreateOrConnectWithoutUserInput = {
    where: FollowersWhereUniqueInput
    create: XOR<FollowersCreateWithoutUserInput, FollowersUncheckedCreateWithoutUserInput>
  }

  export type FollowersCreateManyUserInputEnvelope = {
    data: FollowersCreateManyUserInput | FollowersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoginTokensUpsertWithWhereUniqueWithoutUserInput = {
    where: LoginTokensWhereUniqueInput
    update: XOR<LoginTokensUpdateWithoutUserInput, LoginTokensUncheckedUpdateWithoutUserInput>
    create: XOR<LoginTokensCreateWithoutUserInput, LoginTokensUncheckedCreateWithoutUserInput>
  }

  export type LoginTokensUpdateWithWhereUniqueWithoutUserInput = {
    where: LoginTokensWhereUniqueInput
    data: XOR<LoginTokensUpdateWithoutUserInput, LoginTokensUncheckedUpdateWithoutUserInput>
  }

  export type LoginTokensUpdateManyWithWhereWithoutUserInput = {
    where: LoginTokensScalarWhereInput
    data: XOR<LoginTokensUpdateManyMutationInput, LoginTokensUncheckedUpdateManyWithoutUserInput>
  }

  export type LoginTokensScalarWhereInput = {
    AND?: LoginTokensScalarWhereInput | LoginTokensScalarWhereInput[]
    OR?: LoginTokensScalarWhereInput[]
    NOT?: LoginTokensScalarWhereInput | LoginTokensScalarWhereInput[]
    id?: IntFilter<"LoginTokens"> | number
    userId?: IntFilter<"LoginTokens"> | number
    token?: StringFilter<"LoginTokens"> | string
    createdAt?: DateTimeFilter<"LoginTokens"> | Date | string
    expiresAt?: DateTimeFilter<"LoginTokens"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    movieId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    rating?: FloatFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type BookmarkedMoviesUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkedMoviesWhereUniqueInput
    update: XOR<BookmarkedMoviesUpdateWithoutUserInput, BookmarkedMoviesUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkedMoviesCreateWithoutUserInput, BookmarkedMoviesUncheckedCreateWithoutUserInput>
  }

  export type BookmarkedMoviesUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkedMoviesWhereUniqueInput
    data: XOR<BookmarkedMoviesUpdateWithoutUserInput, BookmarkedMoviesUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkedMoviesUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkedMoviesScalarWhereInput
    data: XOR<BookmarkedMoviesUpdateManyMutationInput, BookmarkedMoviesUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkedMoviesScalarWhereInput = {
    AND?: BookmarkedMoviesScalarWhereInput | BookmarkedMoviesScalarWhereInput[]
    OR?: BookmarkedMoviesScalarWhereInput[]
    NOT?: BookmarkedMoviesScalarWhereInput | BookmarkedMoviesScalarWhereInput[]
    userId?: IntFilter<"BookmarkedMovies"> | number
    movieId?: IntFilter<"BookmarkedMovies"> | number
    bookmarkedAt?: DateTimeFilter<"BookmarkedMovies"> | Date | string
  }

  export type WatchedMoviesUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchedMoviesWhereUniqueInput
    update: XOR<WatchedMoviesUpdateWithoutUserInput, WatchedMoviesUncheckedUpdateWithoutUserInput>
    create: XOR<WatchedMoviesCreateWithoutUserInput, WatchedMoviesUncheckedCreateWithoutUserInput>
  }

  export type WatchedMoviesUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchedMoviesWhereUniqueInput
    data: XOR<WatchedMoviesUpdateWithoutUserInput, WatchedMoviesUncheckedUpdateWithoutUserInput>
  }

  export type WatchedMoviesUpdateManyWithWhereWithoutUserInput = {
    where: WatchedMoviesScalarWhereInput
    data: XOR<WatchedMoviesUpdateManyMutationInput, WatchedMoviesUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchedMoviesScalarWhereInput = {
    AND?: WatchedMoviesScalarWhereInput | WatchedMoviesScalarWhereInput[]
    OR?: WatchedMoviesScalarWhereInput[]
    NOT?: WatchedMoviesScalarWhereInput | WatchedMoviesScalarWhereInput[]
    userId?: IntFilter<"WatchedMovies"> | number
    movieId?: IntFilter<"WatchedMovies"> | number
    watchedAt?: DateTimeFilter<"WatchedMovies"> | Date | string
  }

  export type FollowersUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowersWhereUniqueInput
    update: XOR<FollowersUpdateWithoutFollowerInput, FollowersUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowersCreateWithoutFollowerInput, FollowersUncheckedCreateWithoutFollowerInput>
  }

  export type FollowersUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowersWhereUniqueInput
    data: XOR<FollowersUpdateWithoutFollowerInput, FollowersUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowersUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowersScalarWhereInput
    data: XOR<FollowersUpdateManyMutationInput, FollowersUncheckedUpdateManyWithoutFollowerInput>
  }

  export type FollowersScalarWhereInput = {
    AND?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
    OR?: FollowersScalarWhereInput[]
    NOT?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
    userId?: IntFilter<"Followers"> | number
    followerId?: IntFilter<"Followers"> | number
  }

  export type FollowersUpsertWithWhereUniqueWithoutUserInput = {
    where: FollowersWhereUniqueInput
    update: XOR<FollowersUpdateWithoutUserInput, FollowersUncheckedUpdateWithoutUserInput>
    create: XOR<FollowersCreateWithoutUserInput, FollowersUncheckedCreateWithoutUserInput>
  }

  export type FollowersUpdateWithWhereUniqueWithoutUserInput = {
    where: FollowersWhereUniqueInput
    data: XOR<FollowersUpdateWithoutUserInput, FollowersUncheckedUpdateWithoutUserInput>
  }

  export type FollowersUpdateManyWithWhereWithoutUserInput = {
    where: FollowersScalarWhereInput
    data: XOR<FollowersUpdateManyMutationInput, FollowersUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersCreateWithoutTokensInput = {
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutUserInput
    followers?: FollowersCreateNestedManyWithoutFollowerInput
    following?: FollowersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTokensInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTokensInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
  }

  export type UsersUpsertWithoutTokensInput = {
    update: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
    create: XOR<UsersCreateWithoutTokensInput, UsersUncheckedCreateWithoutTokensInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTokensInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTokensInput, UsersUncheckedUpdateWithoutTokensInput>
  }

  export type UsersUpdateWithoutTokensInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutUserNestedInput
    followers?: FollowersUpdateManyWithoutFollowerNestedInput
    following?: FollowersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoviesCategoriesCreateWithoutMovieInput = {
    category: CategoriesCreateNestedOneWithoutMoviesInput
  }

  export type MoviesCategoriesUncheckedCreateWithoutMovieInput = {
    categoryId: number
  }

  export type MoviesCategoriesCreateOrConnectWithoutMovieInput = {
    where: MoviesCategoriesWhereUniqueInput
    create: XOR<MoviesCategoriesCreateWithoutMovieInput, MoviesCategoriesUncheckedCreateWithoutMovieInput>
  }

  export type MoviesCategoriesCreateManyMovieInputEnvelope = {
    data: MoviesCategoriesCreateManyMovieInput | MoviesCategoriesCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutMovieInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutMovieInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutMovieInput, ReviewsUncheckedCreateWithoutMovieInput>
  }

  export type ReviewsCreateManyMovieInputEnvelope = {
    data: ReviewsCreateManyMovieInput | ReviewsCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkedMoviesCreateWithoutMovieInput = {
    bookmarkedAt?: Date | string
    user: UsersCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkedMoviesUncheckedCreateWithoutMovieInput = {
    userId: number
    bookmarkedAt?: Date | string
  }

  export type BookmarkedMoviesCreateOrConnectWithoutMovieInput = {
    where: BookmarkedMoviesWhereUniqueInput
    create: XOR<BookmarkedMoviesCreateWithoutMovieInput, BookmarkedMoviesUncheckedCreateWithoutMovieInput>
  }

  export type BookmarkedMoviesCreateManyMovieInputEnvelope = {
    data: BookmarkedMoviesCreateManyMovieInput | BookmarkedMoviesCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type WatchedMoviesCreateWithoutMovieInput = {
    watchedAt?: Date | string
    user: UsersCreateNestedOneWithoutWatchedMoviesInput
  }

  export type WatchedMoviesUncheckedCreateWithoutMovieInput = {
    userId: number
    watchedAt?: Date | string
  }

  export type WatchedMoviesCreateOrConnectWithoutMovieInput = {
    where: WatchedMoviesWhereUniqueInput
    create: XOR<WatchedMoviesCreateWithoutMovieInput, WatchedMoviesUncheckedCreateWithoutMovieInput>
  }

  export type WatchedMoviesCreateManyMovieInputEnvelope = {
    data: WatchedMoviesCreateManyMovieInput | WatchedMoviesCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type FeaturedMovieCreateWithoutMovieInput = {
    updatedAt?: Date | string
  }

  export type FeaturedMovieUncheckedCreateWithoutMovieInput = {
    id?: number
    updatedAt?: Date | string
  }

  export type FeaturedMovieCreateOrConnectWithoutMovieInput = {
    where: FeaturedMovieWhereUniqueInput
    create: XOR<FeaturedMovieCreateWithoutMovieInput, FeaturedMovieUncheckedCreateWithoutMovieInput>
  }

  export type MoviesCategoriesUpsertWithWhereUniqueWithoutMovieInput = {
    where: MoviesCategoriesWhereUniqueInput
    update: XOR<MoviesCategoriesUpdateWithoutMovieInput, MoviesCategoriesUncheckedUpdateWithoutMovieInput>
    create: XOR<MoviesCategoriesCreateWithoutMovieInput, MoviesCategoriesUncheckedCreateWithoutMovieInput>
  }

  export type MoviesCategoriesUpdateWithWhereUniqueWithoutMovieInput = {
    where: MoviesCategoriesWhereUniqueInput
    data: XOR<MoviesCategoriesUpdateWithoutMovieInput, MoviesCategoriesUncheckedUpdateWithoutMovieInput>
  }

  export type MoviesCategoriesUpdateManyWithWhereWithoutMovieInput = {
    where: MoviesCategoriesScalarWhereInput
    data: XOR<MoviesCategoriesUpdateManyMutationInput, MoviesCategoriesUncheckedUpdateManyWithoutMovieInput>
  }

  export type MoviesCategoriesScalarWhereInput = {
    AND?: MoviesCategoriesScalarWhereInput | MoviesCategoriesScalarWhereInput[]
    OR?: MoviesCategoriesScalarWhereInput[]
    NOT?: MoviesCategoriesScalarWhereInput | MoviesCategoriesScalarWhereInput[]
    movieId?: IntFilter<"MoviesCategories"> | number
    categoryId?: IntFilter<"MoviesCategories"> | number
  }

  export type ReviewsUpsertWithWhereUniqueWithoutMovieInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutMovieInput, ReviewsUncheckedUpdateWithoutMovieInput>
    create: XOR<ReviewsCreateWithoutMovieInput, ReviewsUncheckedCreateWithoutMovieInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutMovieInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutMovieInput, ReviewsUncheckedUpdateWithoutMovieInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutMovieInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutMovieInput>
  }

  export type BookmarkedMoviesUpsertWithWhereUniqueWithoutMovieInput = {
    where: BookmarkedMoviesWhereUniqueInput
    update: XOR<BookmarkedMoviesUpdateWithoutMovieInput, BookmarkedMoviesUncheckedUpdateWithoutMovieInput>
    create: XOR<BookmarkedMoviesCreateWithoutMovieInput, BookmarkedMoviesUncheckedCreateWithoutMovieInput>
  }

  export type BookmarkedMoviesUpdateWithWhereUniqueWithoutMovieInput = {
    where: BookmarkedMoviesWhereUniqueInput
    data: XOR<BookmarkedMoviesUpdateWithoutMovieInput, BookmarkedMoviesUncheckedUpdateWithoutMovieInput>
  }

  export type BookmarkedMoviesUpdateManyWithWhereWithoutMovieInput = {
    where: BookmarkedMoviesScalarWhereInput
    data: XOR<BookmarkedMoviesUpdateManyMutationInput, BookmarkedMoviesUncheckedUpdateManyWithoutMovieInput>
  }

  export type WatchedMoviesUpsertWithWhereUniqueWithoutMovieInput = {
    where: WatchedMoviesWhereUniqueInput
    update: XOR<WatchedMoviesUpdateWithoutMovieInput, WatchedMoviesUncheckedUpdateWithoutMovieInput>
    create: XOR<WatchedMoviesCreateWithoutMovieInput, WatchedMoviesUncheckedCreateWithoutMovieInput>
  }

  export type WatchedMoviesUpdateWithWhereUniqueWithoutMovieInput = {
    where: WatchedMoviesWhereUniqueInput
    data: XOR<WatchedMoviesUpdateWithoutMovieInput, WatchedMoviesUncheckedUpdateWithoutMovieInput>
  }

  export type WatchedMoviesUpdateManyWithWhereWithoutMovieInput = {
    where: WatchedMoviesScalarWhereInput
    data: XOR<WatchedMoviesUpdateManyMutationInput, WatchedMoviesUncheckedUpdateManyWithoutMovieInput>
  }

  export type FeaturedMovieUpsertWithoutMovieInput = {
    update: XOR<FeaturedMovieUpdateWithoutMovieInput, FeaturedMovieUncheckedUpdateWithoutMovieInput>
    create: XOR<FeaturedMovieCreateWithoutMovieInput, FeaturedMovieUncheckedCreateWithoutMovieInput>
    where?: FeaturedMovieWhereInput
  }

  export type FeaturedMovieUpdateToOneWithWhereWithoutMovieInput = {
    where?: FeaturedMovieWhereInput
    data: XOR<FeaturedMovieUpdateWithoutMovieInput, FeaturedMovieUncheckedUpdateWithoutMovieInput>
  }

  export type FeaturedMovieUpdateWithoutMovieInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedMovieUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesCategoriesCreateWithoutCategoryInput = {
    movie: MoviesCreateNestedOneWithoutCategoriesInput
  }

  export type MoviesCategoriesUncheckedCreateWithoutCategoryInput = {
    movieId: number
  }

  export type MoviesCategoriesCreateOrConnectWithoutCategoryInput = {
    where: MoviesCategoriesWhereUniqueInput
    create: XOR<MoviesCategoriesCreateWithoutCategoryInput, MoviesCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type MoviesCategoriesCreateManyCategoryInputEnvelope = {
    data: MoviesCategoriesCreateManyCategoryInput | MoviesCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type HomepageSectionCreateWithoutCategoryInput = {
    title: string
    sortOrder: number
    movieLimit: number
  }

  export type HomepageSectionUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    sortOrder: number
    movieLimit: number
  }

  export type HomepageSectionCreateOrConnectWithoutCategoryInput = {
    where: HomepageSectionWhereUniqueInput
    create: XOR<HomepageSectionCreateWithoutCategoryInput, HomepageSectionUncheckedCreateWithoutCategoryInput>
  }

  export type HomepageSectionCreateManyCategoryInputEnvelope = {
    data: HomepageSectionCreateManyCategoryInput | HomepageSectionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MoviesCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MoviesCategoriesWhereUniqueInput
    update: XOR<MoviesCategoriesUpdateWithoutCategoryInput, MoviesCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<MoviesCategoriesCreateWithoutCategoryInput, MoviesCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type MoviesCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MoviesCategoriesWhereUniqueInput
    data: XOR<MoviesCategoriesUpdateWithoutCategoryInput, MoviesCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type MoviesCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: MoviesCategoriesScalarWhereInput
    data: XOR<MoviesCategoriesUpdateManyMutationInput, MoviesCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type HomepageSectionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: HomepageSectionWhereUniqueInput
    update: XOR<HomepageSectionUpdateWithoutCategoryInput, HomepageSectionUncheckedUpdateWithoutCategoryInput>
    create: XOR<HomepageSectionCreateWithoutCategoryInput, HomepageSectionUncheckedCreateWithoutCategoryInput>
  }

  export type HomepageSectionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: HomepageSectionWhereUniqueInput
    data: XOR<HomepageSectionUpdateWithoutCategoryInput, HomepageSectionUncheckedUpdateWithoutCategoryInput>
  }

  export type HomepageSectionUpdateManyWithWhereWithoutCategoryInput = {
    where: HomepageSectionScalarWhereInput
    data: XOR<HomepageSectionUpdateManyMutationInput, HomepageSectionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type HomepageSectionScalarWhereInput = {
    AND?: HomepageSectionScalarWhereInput | HomepageSectionScalarWhereInput[]
    OR?: HomepageSectionScalarWhereInput[]
    NOT?: HomepageSectionScalarWhereInput | HomepageSectionScalarWhereInput[]
    id?: IntFilter<"HomepageSection"> | number
    categoryId?: IntFilter<"HomepageSection"> | number
    title?: StringFilter<"HomepageSection"> | string
    sortOrder?: IntFilter<"HomepageSection"> | number
    movieLimit?: IntFilter<"HomepageSection"> | number
  }

  export type MoviesCreateWithoutCategoriesInput = {
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    reviews?: ReviewsCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieCreateNestedOneWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieUncheckedCreateNestedOneWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutCategoriesInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutCategoriesInput, MoviesUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoriesCreateWithoutMoviesInput = {
    name: string
    description: string
    homepageSections?: HomepageSectionCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
    description: string
    homepageSections?: HomepageSectionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutMoviesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutMoviesInput, CategoriesUncheckedCreateWithoutMoviesInput>
  }

  export type MoviesUpsertWithoutCategoriesInput = {
    update: XOR<MoviesUpdateWithoutCategoriesInput, MoviesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<MoviesCreateWithoutCategoriesInput, MoviesUncheckedCreateWithoutCategoriesInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutCategoriesInput, MoviesUncheckedUpdateWithoutCategoriesInput>
  }

  export type MoviesUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUpdateOneWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUncheckedUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUncheckedUpdateOneWithoutMovieNestedInput
  }

  export type CategoriesUpsertWithoutMoviesInput = {
    update: XOR<CategoriesUpdateWithoutMoviesInput, CategoriesUncheckedUpdateWithoutMoviesInput>
    create: XOR<CategoriesCreateWithoutMoviesInput, CategoriesUncheckedCreateWithoutMoviesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutMoviesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutMoviesInput, CategoriesUncheckedUpdateWithoutMoviesInput>
  }

  export type CategoriesUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageSections?: HomepageSectionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageSections?: HomepageSectionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MoviesCreateWithoutFeaturedMovieInput = {
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesCreateNestedManyWithoutMovieInput
    reviews?: ReviewsCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutFeaturedMovieInput = {
    id?: number
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutFeaturedMovieInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutFeaturedMovieInput, MoviesUncheckedCreateWithoutFeaturedMovieInput>
  }

  export type MoviesUpsertWithoutFeaturedMovieInput = {
    update: XOR<MoviesUpdateWithoutFeaturedMovieInput, MoviesUncheckedUpdateWithoutFeaturedMovieInput>
    create: XOR<MoviesCreateWithoutFeaturedMovieInput, MoviesUncheckedCreateWithoutFeaturedMovieInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutFeaturedMovieInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutFeaturedMovieInput, MoviesUncheckedUpdateWithoutFeaturedMovieInput>
  }

  export type MoviesUpdateWithoutFeaturedMovieInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutFeaturedMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type CategoriesCreateWithoutHomepageSectionsInput = {
    name: string
    description: string
    movies?: MoviesCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutHomepageSectionsInput = {
    id?: number
    name: string
    description: string
    movies?: MoviesCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutHomepageSectionsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutHomepageSectionsInput, CategoriesUncheckedCreateWithoutHomepageSectionsInput>
  }

  export type CategoriesUpsertWithoutHomepageSectionsInput = {
    update: XOR<CategoriesUpdateWithoutHomepageSectionsInput, CategoriesUncheckedUpdateWithoutHomepageSectionsInput>
    create: XOR<CategoriesCreateWithoutHomepageSectionsInput, CategoriesUncheckedCreateWithoutHomepageSectionsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutHomepageSectionsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutHomepageSectionsInput, CategoriesUncheckedUpdateWithoutHomepageSectionsInput>
  }

  export type CategoriesUpdateWithoutHomepageSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movies?: MoviesCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutHomepageSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    movies?: MoviesCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UsersCreateWithoutReviewsInput = {
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutUserInput
    followers?: FollowersCreateNestedManyWithoutFollowerInput
    following?: FollowersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type MoviesCreateWithoutReviewsInput = {
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieCreateNestedOneWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesUncheckedCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieUncheckedCreateNestedOneWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutReviewsInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutUserNestedInput
    followers?: FollowersUpdateManyWithoutFollowerNestedInput
    following?: FollowersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoviesUpsertWithoutReviewsInput = {
    update: XOR<MoviesUpdateWithoutReviewsInput, MoviesUncheckedUpdateWithoutReviewsInput>
    create: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutReviewsInput, MoviesUncheckedUpdateWithoutReviewsInput>
  }

  export type MoviesUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUpdateOneWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUncheckedUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUncheckedUpdateOneWithoutMovieNestedInput
  }

  export type UsersCreateWithoutBookmarksInput = {
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutUserInput
    followers?: FollowersCreateNestedManyWithoutFollowerInput
    following?: FollowersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutBookmarksInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutBookmarksInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookmarksInput, UsersUncheckedCreateWithoutBookmarksInput>
  }

  export type MoviesCreateWithoutBookmarksInput = {
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesCreateNestedManyWithoutMovieInput
    reviews?: ReviewsCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieCreateNestedOneWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutBookmarksInput = {
    id?: number
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMovieInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieUncheckedCreateNestedOneWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutBookmarksInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutBookmarksInput, MoviesUncheckedCreateWithoutBookmarksInput>
  }

  export type UsersUpsertWithoutBookmarksInput = {
    update: XOR<UsersUpdateWithoutBookmarksInput, UsersUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UsersCreateWithoutBookmarksInput, UsersUncheckedCreateWithoutBookmarksInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookmarksInput, UsersUncheckedUpdateWithoutBookmarksInput>
  }

  export type UsersUpdateWithoutBookmarksInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutUserNestedInput
    followers?: FollowersUpdateManyWithoutFollowerNestedInput
    following?: FollowersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoviesUpsertWithoutBookmarksInput = {
    update: XOR<MoviesUpdateWithoutBookmarksInput, MoviesUncheckedUpdateWithoutBookmarksInput>
    create: XOR<MoviesCreateWithoutBookmarksInput, MoviesUncheckedCreateWithoutBookmarksInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutBookmarksInput, MoviesUncheckedUpdateWithoutBookmarksInput>
  }

  export type MoviesUpdateWithoutBookmarksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUpdateOneWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutBookmarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMovieNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUncheckedUpdateOneWithoutMovieNestedInput
  }

  export type UsersCreateWithoutWatchedMoviesInput = {
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutUserInput
    followers?: FollowersCreateNestedManyWithoutFollowerInput
    following?: FollowersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutWatchedMoviesInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutWatchedMoviesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWatchedMoviesInput, UsersUncheckedCreateWithoutWatchedMoviesInput>
  }

  export type MoviesCreateWithoutWatchedMoviesInput = {
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesCreateNestedManyWithoutMovieInput
    reviews?: ReviewsCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieCreateNestedOneWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutWatchedMoviesInput = {
    id?: number
    title: string
    description?: string | null
    release_year: number
    imageUrl: string
    posterUrl?: string | null
    duration: number
    rating: number
    releaseDate: Date | string
    created_at?: Date | string
    categories?: MoviesCategoriesUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMovieInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutMovieInput
    featuredMovie?: FeaturedMovieUncheckedCreateNestedOneWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutWatchedMoviesInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutWatchedMoviesInput, MoviesUncheckedCreateWithoutWatchedMoviesInput>
  }

  export type UsersUpsertWithoutWatchedMoviesInput = {
    update: XOR<UsersUpdateWithoutWatchedMoviesInput, UsersUncheckedUpdateWithoutWatchedMoviesInput>
    create: XOR<UsersCreateWithoutWatchedMoviesInput, UsersUncheckedCreateWithoutWatchedMoviesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWatchedMoviesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWatchedMoviesInput, UsersUncheckedUpdateWithoutWatchedMoviesInput>
  }

  export type UsersUpdateWithoutWatchedMoviesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutUserNestedInput
    followers?: FollowersUpdateManyWithoutFollowerNestedInput
    following?: FollowersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutWatchedMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoviesUpsertWithoutWatchedMoviesInput = {
    update: XOR<MoviesUpdateWithoutWatchedMoviesInput, MoviesUncheckedUpdateWithoutWatchedMoviesInput>
    create: XOR<MoviesCreateWithoutWatchedMoviesInput, MoviesUncheckedCreateWithoutWatchedMoviesInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutWatchedMoviesInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutWatchedMoviesInput, MoviesUncheckedUpdateWithoutWatchedMoviesInput>
  }

  export type MoviesUpdateWithoutWatchedMoviesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUpdateOneWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutWatchedMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    release_year?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MoviesCategoriesUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMovieNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutMovieNestedInput
    featuredMovie?: FeaturedMovieUncheckedUpdateOneWithoutMovieNestedInput
  }

  export type UsersCreateWithoutFollowingInput = {
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutUserInput
    followers?: FollowersCreateNestedManyWithoutFollowerInput
  }

  export type UsersUncheckedCreateWithoutFollowingInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UsersCreateOrConnectWithoutFollowingInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
  }

  export type UsersCreateWithoutFollowersInput = {
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesCreateNestedManyWithoutUserInput
    following?: FollowersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFollowersInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    tokens?: LoginTokensUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkedMoviesUncheckedCreateNestedManyWithoutUserInput
    watchedMovies?: WatchedMoviesUncheckedCreateNestedManyWithoutUserInput
    following?: FollowersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFollowersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
  }

  export type UsersUpsertWithoutFollowingInput = {
    update: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
  }

  export type UsersUpdateWithoutFollowingInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutUserNestedInput
    followers?: FollowersUpdateManyWithoutFollowerNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type UsersUpsertWithoutFollowersInput = {
    update: XOR<UsersUpdateWithoutFollowersInput, UsersUncheckedUpdateWithoutFollowersInput>
    create: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollowersInput, UsersUncheckedUpdateWithoutFollowersInput>
  }

  export type UsersUpdateWithoutFollowersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUpdateManyWithoutUserNestedInput
    following?: FollowersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: LoginTokensUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkedMoviesUncheckedUpdateManyWithoutUserNestedInput
    watchedMovies?: WatchedMoviesUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LoginTokensCreateManyUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    movieId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type BookmarkedMoviesCreateManyUserInput = {
    movieId: number
    bookmarkedAt?: Date | string
  }

  export type WatchedMoviesCreateManyUserInput = {
    movieId: number
    watchedAt?: Date | string
  }

  export type FollowersCreateManyFollowerInput = {
    userId: number
  }

  export type FollowersCreateManyUserInput = {
    followerId: number
  }

  export type LoginTokensUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MoviesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedMoviesUpdateWithoutUserInput = {
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MoviesUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkedMoviesUncheckedUpdateWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedMoviesUncheckedUpdateManyWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedMoviesUpdateWithoutUserInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MoviesUpdateOneRequiredWithoutWatchedMoviesNestedInput
  }

  export type WatchedMoviesUncheckedUpdateWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedMoviesUncheckedUpdateManyWithoutUserInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowersUpdateWithoutFollowerInput = {
    user?: UsersUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowersUncheckedUpdateWithoutFollowerInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersUncheckedUpdateManyWithoutFollowerInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersUpdateWithoutUserInput = {
    follower?: UsersUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowersUncheckedUpdateWithoutUserInput = {
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersUncheckedUpdateManyWithoutUserInput = {
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type MoviesCategoriesCreateManyMovieInput = {
    categoryId: number
  }

  export type ReviewsCreateManyMovieInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type BookmarkedMoviesCreateManyMovieInput = {
    userId: number
    bookmarkedAt?: Date | string
  }

  export type WatchedMoviesCreateManyMovieInput = {
    userId: number
    watchedAt?: Date | string
  }

  export type MoviesCategoriesUpdateWithoutMovieInput = {
    category?: CategoriesUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesCategoriesUncheckedUpdateWithoutMovieInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MoviesCategoriesUncheckedUpdateManyWithoutMovieInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUpdateWithoutMovieInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedMoviesUpdateWithoutMovieInput = {
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkedMoviesUncheckedUpdateWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedMoviesUncheckedUpdateManyWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    bookmarkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedMoviesUpdateWithoutMovieInput = {
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutWatchedMoviesNestedInput
  }

  export type WatchedMoviesUncheckedUpdateWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchedMoviesUncheckedUpdateManyWithoutMovieInput = {
    userId?: IntFieldUpdateOperationsInput | number
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesCategoriesCreateManyCategoryInput = {
    movieId: number
  }

  export type HomepageSectionCreateManyCategoryInput = {
    id?: number
    title: string
    sortOrder: number
    movieLimit: number
  }

  export type MoviesCategoriesUpdateWithoutCategoryInput = {
    movie?: MoviesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type MoviesCategoriesUncheckedUpdateWithoutCategoryInput = {
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type MoviesCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type HomepageSectionUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    movieLimit?: IntFieldUpdateOperationsInput | number
  }

  export type HomepageSectionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    movieLimit?: IntFieldUpdateOperationsInput | number
  }

  export type HomepageSectionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    movieLimit?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}