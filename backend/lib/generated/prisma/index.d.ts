
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
 * Model Wine_master
 * 
 */
export type Wine_master = $Result.DefaultSelection<Prisma.$Wine_masterPayload>
/**
 * Model Food_master
 * 
 */
export type Food_master = $Result.DefaultSelection<Prisma.$Food_masterPayload>
/**
 * Model Sisha_master
 * 
 */
export type Sisha_master = $Result.DefaultSelection<Prisma.$Sisha_masterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Wine_masters
 * const wine_masters = await prisma.wine_master.findMany()
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
   * // Fetch zero or more Wine_masters
   * const wine_masters = await prisma.wine_master.findMany()
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
   * `prisma.wine_master`: Exposes CRUD operations for the **Wine_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wine_masters
    * const wine_masters = await prisma.wine_master.findMany()
    * ```
    */
  get wine_master(): Prisma.Wine_masterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food_master`: Exposes CRUD operations for the **Food_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_masters
    * const food_masters = await prisma.food_master.findMany()
    * ```
    */
  get food_master(): Prisma.Food_masterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sisha_master`: Exposes CRUD operations for the **Sisha_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sisha_masters
    * const sisha_masters = await prisma.sisha_master.findMany()
    * ```
    */
  get sisha_master(): Prisma.Sisha_masterDelegate<ExtArgs, ClientOptions>;
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
    Wine_master: 'Wine_master',
    Food_master: 'Food_master',
    Sisha_master: 'Sisha_master'
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
      modelProps: "wine_master" | "food_master" | "sisha_master"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Wine_master: {
        payload: Prisma.$Wine_masterPayload<ExtArgs>
        fields: Prisma.Wine_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Wine_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Wine_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>
          }
          findFirst: {
            args: Prisma.Wine_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Wine_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>
          }
          findMany: {
            args: Prisma.Wine_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>[]
          }
          create: {
            args: Prisma.Wine_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>
          }
          createMany: {
            args: Prisma.Wine_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Wine_masterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>[]
          }
          delete: {
            args: Prisma.Wine_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>
          }
          update: {
            args: Prisma.Wine_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>
          }
          deleteMany: {
            args: Prisma.Wine_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Wine_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Wine_masterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>[]
          }
          upsert: {
            args: Prisma.Wine_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Wine_masterPayload>
          }
          aggregate: {
            args: Prisma.Wine_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWine_master>
          }
          groupBy: {
            args: Prisma.Wine_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Wine_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.Wine_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Wine_masterCountAggregateOutputType> | number
          }
        }
      }
      Food_master: {
        payload: Prisma.$Food_masterPayload<ExtArgs>
        fields: Prisma.Food_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Food_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Food_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>
          }
          findFirst: {
            args: Prisma.Food_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Food_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>
          }
          findMany: {
            args: Prisma.Food_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>[]
          }
          create: {
            args: Prisma.Food_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>
          }
          createMany: {
            args: Prisma.Food_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Food_masterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>[]
          }
          delete: {
            args: Prisma.Food_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>
          }
          update: {
            args: Prisma.Food_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>
          }
          deleteMany: {
            args: Prisma.Food_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Food_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Food_masterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>[]
          }
          upsert: {
            args: Prisma.Food_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_masterPayload>
          }
          aggregate: {
            args: Prisma.Food_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood_master>
          }
          groupBy: {
            args: Prisma.Food_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Food_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.Food_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Food_masterCountAggregateOutputType> | number
          }
        }
      }
      Sisha_master: {
        payload: Prisma.$Sisha_masterPayload<ExtArgs>
        fields: Prisma.Sisha_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sisha_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sisha_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>
          }
          findFirst: {
            args: Prisma.Sisha_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sisha_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>
          }
          findMany: {
            args: Prisma.Sisha_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>[]
          }
          create: {
            args: Prisma.Sisha_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>
          }
          createMany: {
            args: Prisma.Sisha_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Sisha_masterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>[]
          }
          delete: {
            args: Prisma.Sisha_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>
          }
          update: {
            args: Prisma.Sisha_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>
          }
          deleteMany: {
            args: Prisma.Sisha_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sisha_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Sisha_masterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>[]
          }
          upsert: {
            args: Prisma.Sisha_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sisha_masterPayload>
          }
          aggregate: {
            args: Prisma.Sisha_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSisha_master>
          }
          groupBy: {
            args: Prisma.Sisha_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sisha_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sisha_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Sisha_masterCountAggregateOutputType> | number
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
    wine_master?: Wine_masterOmit
    food_master?: Food_masterOmit
    sisha_master?: Sisha_masterOmit
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
   * Models
   */

  /**
   * Model Wine_master
   */

  export type AggregateWine_master = {
    _count: Wine_masterCountAggregateOutputType | null
    _min: Wine_masterMinAggregateOutputType | null
    _max: Wine_masterMaxAggregateOutputType | null
  }

  export type Wine_masterMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: string | null
    categoryid: string | null
  }

  export type Wine_masterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: string | null
    categoryid: string | null
  }

  export type Wine_masterCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    categoryid: number
    _all: number
  }


  export type Wine_masterMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
  }

  export type Wine_masterMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
  }

  export type Wine_masterCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
    _all?: true
  }

  export type Wine_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wine_master to aggregate.
     */
    where?: Wine_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wine_masters to fetch.
     */
    orderBy?: Wine_masterOrderByWithRelationInput | Wine_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Wine_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wine_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wine_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wine_masters
    **/
    _count?: true | Wine_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wine_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wine_masterMaxAggregateInputType
  }

  export type GetWine_masterAggregateType<T extends Wine_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateWine_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWine_master[P]>
      : GetScalarType<T[P], AggregateWine_master[P]>
  }




  export type Wine_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Wine_masterWhereInput
    orderBy?: Wine_masterOrderByWithAggregationInput | Wine_masterOrderByWithAggregationInput[]
    by: Wine_masterScalarFieldEnum[] | Wine_masterScalarFieldEnum
    having?: Wine_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wine_masterCountAggregateInputType | true
    _min?: Wine_masterMinAggregateInputType
    _max?: Wine_masterMaxAggregateInputType
  }

  export type Wine_masterGroupByOutputType = {
    id: string
    name: string
    description: string
    price: string
    categoryid: string
    _count: Wine_masterCountAggregateOutputType | null
    _min: Wine_masterMinAggregateOutputType | null
    _max: Wine_masterMaxAggregateOutputType | null
  }

  type GetWine_masterGroupByPayload<T extends Wine_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wine_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wine_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wine_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Wine_masterGroupByOutputType[P]>
        }
      >
    >


  export type Wine_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["wine_master"]>

  export type Wine_masterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["wine_master"]>

  export type Wine_masterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["wine_master"]>

  export type Wine_masterSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }

  export type Wine_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "categoryid", ExtArgs["result"]["wine_master"]>

  export type $Wine_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wine_master"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: string
      categoryid: string
    }, ExtArgs["result"]["wine_master"]>
    composites: {}
  }

  type Wine_masterGetPayload<S extends boolean | null | undefined | Wine_masterDefaultArgs> = $Result.GetResult<Prisma.$Wine_masterPayload, S>

  type Wine_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Wine_masterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Wine_masterCountAggregateInputType | true
    }

  export interface Wine_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wine_master'], meta: { name: 'Wine_master' } }
    /**
     * Find zero or one Wine_master that matches the filter.
     * @param {Wine_masterFindUniqueArgs} args - Arguments to find a Wine_master
     * @example
     * // Get one Wine_master
     * const wine_master = await prisma.wine_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Wine_masterFindUniqueArgs>(args: SelectSubset<T, Wine_masterFindUniqueArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wine_master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Wine_masterFindUniqueOrThrowArgs} args - Arguments to find a Wine_master
     * @example
     * // Get one Wine_master
     * const wine_master = await prisma.wine_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Wine_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, Wine_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wine_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wine_masterFindFirstArgs} args - Arguments to find a Wine_master
     * @example
     * // Get one Wine_master
     * const wine_master = await prisma.wine_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Wine_masterFindFirstArgs>(args?: SelectSubset<T, Wine_masterFindFirstArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wine_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wine_masterFindFirstOrThrowArgs} args - Arguments to find a Wine_master
     * @example
     * // Get one Wine_master
     * const wine_master = await prisma.wine_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Wine_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, Wine_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wine_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wine_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wine_masters
     * const wine_masters = await prisma.wine_master.findMany()
     * 
     * // Get first 10 Wine_masters
     * const wine_masters = await prisma.wine_master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wine_masterWithIdOnly = await prisma.wine_master.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Wine_masterFindManyArgs>(args?: SelectSubset<T, Wine_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wine_master.
     * @param {Wine_masterCreateArgs} args - Arguments to create a Wine_master.
     * @example
     * // Create one Wine_master
     * const Wine_master = await prisma.wine_master.create({
     *   data: {
     *     // ... data to create a Wine_master
     *   }
     * })
     * 
     */
    create<T extends Wine_masterCreateArgs>(args: SelectSubset<T, Wine_masterCreateArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wine_masters.
     * @param {Wine_masterCreateManyArgs} args - Arguments to create many Wine_masters.
     * @example
     * // Create many Wine_masters
     * const wine_master = await prisma.wine_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Wine_masterCreateManyArgs>(args?: SelectSubset<T, Wine_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wine_masters and returns the data saved in the database.
     * @param {Wine_masterCreateManyAndReturnArgs} args - Arguments to create many Wine_masters.
     * @example
     * // Create many Wine_masters
     * const wine_master = await prisma.wine_master.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wine_masters and only return the `id`
     * const wine_masterWithIdOnly = await prisma.wine_master.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Wine_masterCreateManyAndReturnArgs>(args?: SelectSubset<T, Wine_masterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wine_master.
     * @param {Wine_masterDeleteArgs} args - Arguments to delete one Wine_master.
     * @example
     * // Delete one Wine_master
     * const Wine_master = await prisma.wine_master.delete({
     *   where: {
     *     // ... filter to delete one Wine_master
     *   }
     * })
     * 
     */
    delete<T extends Wine_masterDeleteArgs>(args: SelectSubset<T, Wine_masterDeleteArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wine_master.
     * @param {Wine_masterUpdateArgs} args - Arguments to update one Wine_master.
     * @example
     * // Update one Wine_master
     * const wine_master = await prisma.wine_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Wine_masterUpdateArgs>(args: SelectSubset<T, Wine_masterUpdateArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wine_masters.
     * @param {Wine_masterDeleteManyArgs} args - Arguments to filter Wine_masters to delete.
     * @example
     * // Delete a few Wine_masters
     * const { count } = await prisma.wine_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Wine_masterDeleteManyArgs>(args?: SelectSubset<T, Wine_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wine_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wine_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wine_masters
     * const wine_master = await prisma.wine_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Wine_masterUpdateManyArgs>(args: SelectSubset<T, Wine_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wine_masters and returns the data updated in the database.
     * @param {Wine_masterUpdateManyAndReturnArgs} args - Arguments to update many Wine_masters.
     * @example
     * // Update many Wine_masters
     * const wine_master = await prisma.wine_master.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wine_masters and only return the `id`
     * const wine_masterWithIdOnly = await prisma.wine_master.updateManyAndReturn({
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
    updateManyAndReturn<T extends Wine_masterUpdateManyAndReturnArgs>(args: SelectSubset<T, Wine_masterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wine_master.
     * @param {Wine_masterUpsertArgs} args - Arguments to update or create a Wine_master.
     * @example
     * // Update or create a Wine_master
     * const wine_master = await prisma.wine_master.upsert({
     *   create: {
     *     // ... data to create a Wine_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wine_master we want to update
     *   }
     * })
     */
    upsert<T extends Wine_masterUpsertArgs>(args: SelectSubset<T, Wine_masterUpsertArgs<ExtArgs>>): Prisma__Wine_masterClient<$Result.GetResult<Prisma.$Wine_masterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wine_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wine_masterCountArgs} args - Arguments to filter Wine_masters to count.
     * @example
     * // Count the number of Wine_masters
     * const count = await prisma.wine_master.count({
     *   where: {
     *     // ... the filter for the Wine_masters we want to count
     *   }
     * })
    **/
    count<T extends Wine_masterCountArgs>(
      args?: Subset<T, Wine_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wine_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wine_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wine_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wine_masterAggregateArgs>(args: Subset<T, Wine_masterAggregateArgs>): Prisma.PrismaPromise<GetWine_masterAggregateType<T>>

    /**
     * Group by Wine_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wine_masterGroupByArgs} args - Group by arguments.
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
      T extends Wine_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wine_masterGroupByArgs['orderBy'] }
        : { orderBy?: Wine_masterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Wine_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWine_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wine_master model
   */
  readonly fields: Wine_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wine_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Wine_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Wine_master model
   */
  interface Wine_masterFieldRefs {
    readonly id: FieldRef<"Wine_master", 'String'>
    readonly name: FieldRef<"Wine_master", 'String'>
    readonly description: FieldRef<"Wine_master", 'String'>
    readonly price: FieldRef<"Wine_master", 'String'>
    readonly categoryid: FieldRef<"Wine_master", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wine_master findUnique
   */
  export type Wine_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * Filter, which Wine_master to fetch.
     */
    where: Wine_masterWhereUniqueInput
  }

  /**
   * Wine_master findUniqueOrThrow
   */
  export type Wine_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * Filter, which Wine_master to fetch.
     */
    where: Wine_masterWhereUniqueInput
  }

  /**
   * Wine_master findFirst
   */
  export type Wine_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * Filter, which Wine_master to fetch.
     */
    where?: Wine_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wine_masters to fetch.
     */
    orderBy?: Wine_masterOrderByWithRelationInput | Wine_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wine_masters.
     */
    cursor?: Wine_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wine_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wine_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wine_masters.
     */
    distinct?: Wine_masterScalarFieldEnum | Wine_masterScalarFieldEnum[]
  }

  /**
   * Wine_master findFirstOrThrow
   */
  export type Wine_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * Filter, which Wine_master to fetch.
     */
    where?: Wine_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wine_masters to fetch.
     */
    orderBy?: Wine_masterOrderByWithRelationInput | Wine_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wine_masters.
     */
    cursor?: Wine_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wine_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wine_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wine_masters.
     */
    distinct?: Wine_masterScalarFieldEnum | Wine_masterScalarFieldEnum[]
  }

  /**
   * Wine_master findMany
   */
  export type Wine_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * Filter, which Wine_masters to fetch.
     */
    where?: Wine_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wine_masters to fetch.
     */
    orderBy?: Wine_masterOrderByWithRelationInput | Wine_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wine_masters.
     */
    cursor?: Wine_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wine_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wine_masters.
     */
    skip?: number
    distinct?: Wine_masterScalarFieldEnum | Wine_masterScalarFieldEnum[]
  }

  /**
   * Wine_master create
   */
  export type Wine_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * The data needed to create a Wine_master.
     */
    data: XOR<Wine_masterCreateInput, Wine_masterUncheckedCreateInput>
  }

  /**
   * Wine_master createMany
   */
  export type Wine_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wine_masters.
     */
    data: Wine_masterCreateManyInput | Wine_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wine_master createManyAndReturn
   */
  export type Wine_masterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * The data used to create many Wine_masters.
     */
    data: Wine_masterCreateManyInput | Wine_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wine_master update
   */
  export type Wine_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * The data needed to update a Wine_master.
     */
    data: XOR<Wine_masterUpdateInput, Wine_masterUncheckedUpdateInput>
    /**
     * Choose, which Wine_master to update.
     */
    where: Wine_masterWhereUniqueInput
  }

  /**
   * Wine_master updateMany
   */
  export type Wine_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wine_masters.
     */
    data: XOR<Wine_masterUpdateManyMutationInput, Wine_masterUncheckedUpdateManyInput>
    /**
     * Filter which Wine_masters to update
     */
    where?: Wine_masterWhereInput
    /**
     * Limit how many Wine_masters to update.
     */
    limit?: number
  }

  /**
   * Wine_master updateManyAndReturn
   */
  export type Wine_masterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * The data used to update Wine_masters.
     */
    data: XOR<Wine_masterUpdateManyMutationInput, Wine_masterUncheckedUpdateManyInput>
    /**
     * Filter which Wine_masters to update
     */
    where?: Wine_masterWhereInput
    /**
     * Limit how many Wine_masters to update.
     */
    limit?: number
  }

  /**
   * Wine_master upsert
   */
  export type Wine_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * The filter to search for the Wine_master to update in case it exists.
     */
    where: Wine_masterWhereUniqueInput
    /**
     * In case the Wine_master found by the `where` argument doesn't exist, create a new Wine_master with this data.
     */
    create: XOR<Wine_masterCreateInput, Wine_masterUncheckedCreateInput>
    /**
     * In case the Wine_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Wine_masterUpdateInput, Wine_masterUncheckedUpdateInput>
  }

  /**
   * Wine_master delete
   */
  export type Wine_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
    /**
     * Filter which Wine_master to delete.
     */
    where: Wine_masterWhereUniqueInput
  }

  /**
   * Wine_master deleteMany
   */
  export type Wine_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wine_masters to delete
     */
    where?: Wine_masterWhereInput
    /**
     * Limit how many Wine_masters to delete.
     */
    limit?: number
  }

  /**
   * Wine_master without action
   */
  export type Wine_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wine_master
     */
    select?: Wine_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wine_master
     */
    omit?: Wine_masterOmit<ExtArgs> | null
  }


  /**
   * Model Food_master
   */

  export type AggregateFood_master = {
    _count: Food_masterCountAggregateOutputType | null
    _min: Food_masterMinAggregateOutputType | null
    _max: Food_masterMaxAggregateOutputType | null
  }

  export type Food_masterMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: string | null
    categoryid: string | null
  }

  export type Food_masterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: string | null
    categoryid: string | null
  }

  export type Food_masterCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    categoryid: number
    _all: number
  }


  export type Food_masterMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
  }

  export type Food_masterMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
  }

  export type Food_masterCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
    _all?: true
  }

  export type Food_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food_master to aggregate.
     */
    where?: Food_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_masters to fetch.
     */
    orderBy?: Food_masterOrderByWithRelationInput | Food_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Food_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Food_masters
    **/
    _count?: true | Food_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_masterMaxAggregateInputType
  }

  export type GetFood_masterAggregateType<T extends Food_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_master[P]>
      : GetScalarType<T[P], AggregateFood_master[P]>
  }




  export type Food_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Food_masterWhereInput
    orderBy?: Food_masterOrderByWithAggregationInput | Food_masterOrderByWithAggregationInput[]
    by: Food_masterScalarFieldEnum[] | Food_masterScalarFieldEnum
    having?: Food_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_masterCountAggregateInputType | true
    _min?: Food_masterMinAggregateInputType
    _max?: Food_masterMaxAggregateInputType
  }

  export type Food_masterGroupByOutputType = {
    id: string
    name: string
    description: string
    price: string
    categoryid: string
    _count: Food_masterCountAggregateOutputType | null
    _min: Food_masterMinAggregateOutputType | null
    _max: Food_masterMaxAggregateOutputType | null
  }

  type GetFood_masterGroupByPayload<T extends Food_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Food_masterGroupByOutputType[P]>
        }
      >
    >


  export type Food_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["food_master"]>

  export type Food_masterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["food_master"]>

  export type Food_masterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["food_master"]>

  export type Food_masterSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }

  export type Food_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "categoryid", ExtArgs["result"]["food_master"]>

  export type $Food_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food_master"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: string
      categoryid: string
    }, ExtArgs["result"]["food_master"]>
    composites: {}
  }

  type Food_masterGetPayload<S extends boolean | null | undefined | Food_masterDefaultArgs> = $Result.GetResult<Prisma.$Food_masterPayload, S>

  type Food_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Food_masterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Food_masterCountAggregateInputType | true
    }

  export interface Food_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food_master'], meta: { name: 'Food_master' } }
    /**
     * Find zero or one Food_master that matches the filter.
     * @param {Food_masterFindUniqueArgs} args - Arguments to find a Food_master
     * @example
     * // Get one Food_master
     * const food_master = await prisma.food_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Food_masterFindUniqueArgs>(args: SelectSubset<T, Food_masterFindUniqueArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food_master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Food_masterFindUniqueOrThrowArgs} args - Arguments to find a Food_master
     * @example
     * // Get one Food_master
     * const food_master = await prisma.food_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Food_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, Food_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_masterFindFirstArgs} args - Arguments to find a Food_master
     * @example
     * // Get one Food_master
     * const food_master = await prisma.food_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Food_masterFindFirstArgs>(args?: SelectSubset<T, Food_masterFindFirstArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_masterFindFirstOrThrowArgs} args - Arguments to find a Food_master
     * @example
     * // Get one Food_master
     * const food_master = await prisma.food_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Food_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, Food_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Food_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_masters
     * const food_masters = await prisma.food_master.findMany()
     * 
     * // Get first 10 Food_masters
     * const food_masters = await prisma.food_master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const food_masterWithIdOnly = await prisma.food_master.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Food_masterFindManyArgs>(args?: SelectSubset<T, Food_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food_master.
     * @param {Food_masterCreateArgs} args - Arguments to create a Food_master.
     * @example
     * // Create one Food_master
     * const Food_master = await prisma.food_master.create({
     *   data: {
     *     // ... data to create a Food_master
     *   }
     * })
     * 
     */
    create<T extends Food_masterCreateArgs>(args: SelectSubset<T, Food_masterCreateArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Food_masters.
     * @param {Food_masterCreateManyArgs} args - Arguments to create many Food_masters.
     * @example
     * // Create many Food_masters
     * const food_master = await prisma.food_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Food_masterCreateManyArgs>(args?: SelectSubset<T, Food_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Food_masters and returns the data saved in the database.
     * @param {Food_masterCreateManyAndReturnArgs} args - Arguments to create many Food_masters.
     * @example
     * // Create many Food_masters
     * const food_master = await prisma.food_master.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Food_masters and only return the `id`
     * const food_masterWithIdOnly = await prisma.food_master.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Food_masterCreateManyAndReturnArgs>(args?: SelectSubset<T, Food_masterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food_master.
     * @param {Food_masterDeleteArgs} args - Arguments to delete one Food_master.
     * @example
     * // Delete one Food_master
     * const Food_master = await prisma.food_master.delete({
     *   where: {
     *     // ... filter to delete one Food_master
     *   }
     * })
     * 
     */
    delete<T extends Food_masterDeleteArgs>(args: SelectSubset<T, Food_masterDeleteArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food_master.
     * @param {Food_masterUpdateArgs} args - Arguments to update one Food_master.
     * @example
     * // Update one Food_master
     * const food_master = await prisma.food_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Food_masterUpdateArgs>(args: SelectSubset<T, Food_masterUpdateArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Food_masters.
     * @param {Food_masterDeleteManyArgs} args - Arguments to filter Food_masters to delete.
     * @example
     * // Delete a few Food_masters
     * const { count } = await prisma.food_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Food_masterDeleteManyArgs>(args?: SelectSubset<T, Food_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_masters
     * const food_master = await prisma.food_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Food_masterUpdateManyArgs>(args: SelectSubset<T, Food_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_masters and returns the data updated in the database.
     * @param {Food_masterUpdateManyAndReturnArgs} args - Arguments to update many Food_masters.
     * @example
     * // Update many Food_masters
     * const food_master = await prisma.food_master.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Food_masters and only return the `id`
     * const food_masterWithIdOnly = await prisma.food_master.updateManyAndReturn({
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
    updateManyAndReturn<T extends Food_masterUpdateManyAndReturnArgs>(args: SelectSubset<T, Food_masterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food_master.
     * @param {Food_masterUpsertArgs} args - Arguments to update or create a Food_master.
     * @example
     * // Update or create a Food_master
     * const food_master = await prisma.food_master.upsert({
     *   create: {
     *     // ... data to create a Food_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_master we want to update
     *   }
     * })
     */
    upsert<T extends Food_masterUpsertArgs>(args: SelectSubset<T, Food_masterUpsertArgs<ExtArgs>>): Prisma__Food_masterClient<$Result.GetResult<Prisma.$Food_masterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Food_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_masterCountArgs} args - Arguments to filter Food_masters to count.
     * @example
     * // Count the number of Food_masters
     * const count = await prisma.food_master.count({
     *   where: {
     *     // ... the filter for the Food_masters we want to count
     *   }
     * })
    **/
    count<T extends Food_masterCountArgs>(
      args?: Subset<T, Food_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Food_masterAggregateArgs>(args: Subset<T, Food_masterAggregateArgs>): Prisma.PrismaPromise<GetFood_masterAggregateType<T>>

    /**
     * Group by Food_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_masterGroupByArgs} args - Group by arguments.
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
      T extends Food_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Food_masterGroupByArgs['orderBy'] }
        : { orderBy?: Food_masterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Food_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food_master model
   */
  readonly fields: Food_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Food_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Food_master model
   */
  interface Food_masterFieldRefs {
    readonly id: FieldRef<"Food_master", 'String'>
    readonly name: FieldRef<"Food_master", 'String'>
    readonly description: FieldRef<"Food_master", 'String'>
    readonly price: FieldRef<"Food_master", 'String'>
    readonly categoryid: FieldRef<"Food_master", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Food_master findUnique
   */
  export type Food_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * Filter, which Food_master to fetch.
     */
    where: Food_masterWhereUniqueInput
  }

  /**
   * Food_master findUniqueOrThrow
   */
  export type Food_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * Filter, which Food_master to fetch.
     */
    where: Food_masterWhereUniqueInput
  }

  /**
   * Food_master findFirst
   */
  export type Food_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * Filter, which Food_master to fetch.
     */
    where?: Food_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_masters to fetch.
     */
    orderBy?: Food_masterOrderByWithRelationInput | Food_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Food_masters.
     */
    cursor?: Food_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Food_masters.
     */
    distinct?: Food_masterScalarFieldEnum | Food_masterScalarFieldEnum[]
  }

  /**
   * Food_master findFirstOrThrow
   */
  export type Food_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * Filter, which Food_master to fetch.
     */
    where?: Food_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_masters to fetch.
     */
    orderBy?: Food_masterOrderByWithRelationInput | Food_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Food_masters.
     */
    cursor?: Food_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Food_masters.
     */
    distinct?: Food_masterScalarFieldEnum | Food_masterScalarFieldEnum[]
  }

  /**
   * Food_master findMany
   */
  export type Food_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * Filter, which Food_masters to fetch.
     */
    where?: Food_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_masters to fetch.
     */
    orderBy?: Food_masterOrderByWithRelationInput | Food_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Food_masters.
     */
    cursor?: Food_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_masters.
     */
    skip?: number
    distinct?: Food_masterScalarFieldEnum | Food_masterScalarFieldEnum[]
  }

  /**
   * Food_master create
   */
  export type Food_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * The data needed to create a Food_master.
     */
    data: XOR<Food_masterCreateInput, Food_masterUncheckedCreateInput>
  }

  /**
   * Food_master createMany
   */
  export type Food_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Food_masters.
     */
    data: Food_masterCreateManyInput | Food_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food_master createManyAndReturn
   */
  export type Food_masterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * The data used to create many Food_masters.
     */
    data: Food_masterCreateManyInput | Food_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food_master update
   */
  export type Food_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * The data needed to update a Food_master.
     */
    data: XOR<Food_masterUpdateInput, Food_masterUncheckedUpdateInput>
    /**
     * Choose, which Food_master to update.
     */
    where: Food_masterWhereUniqueInput
  }

  /**
   * Food_master updateMany
   */
  export type Food_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Food_masters.
     */
    data: XOR<Food_masterUpdateManyMutationInput, Food_masterUncheckedUpdateManyInput>
    /**
     * Filter which Food_masters to update
     */
    where?: Food_masterWhereInput
    /**
     * Limit how many Food_masters to update.
     */
    limit?: number
  }

  /**
   * Food_master updateManyAndReturn
   */
  export type Food_masterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * The data used to update Food_masters.
     */
    data: XOR<Food_masterUpdateManyMutationInput, Food_masterUncheckedUpdateManyInput>
    /**
     * Filter which Food_masters to update
     */
    where?: Food_masterWhereInput
    /**
     * Limit how many Food_masters to update.
     */
    limit?: number
  }

  /**
   * Food_master upsert
   */
  export type Food_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * The filter to search for the Food_master to update in case it exists.
     */
    where: Food_masterWhereUniqueInput
    /**
     * In case the Food_master found by the `where` argument doesn't exist, create a new Food_master with this data.
     */
    create: XOR<Food_masterCreateInput, Food_masterUncheckedCreateInput>
    /**
     * In case the Food_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Food_masterUpdateInput, Food_masterUncheckedUpdateInput>
  }

  /**
   * Food_master delete
   */
  export type Food_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
    /**
     * Filter which Food_master to delete.
     */
    where: Food_masterWhereUniqueInput
  }

  /**
   * Food_master deleteMany
   */
  export type Food_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food_masters to delete
     */
    where?: Food_masterWhereInput
    /**
     * Limit how many Food_masters to delete.
     */
    limit?: number
  }

  /**
   * Food_master without action
   */
  export type Food_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_master
     */
    select?: Food_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_master
     */
    omit?: Food_masterOmit<ExtArgs> | null
  }


  /**
   * Model Sisha_master
   */

  export type AggregateSisha_master = {
    _count: Sisha_masterCountAggregateOutputType | null
    _min: Sisha_masterMinAggregateOutputType | null
    _max: Sisha_masterMaxAggregateOutputType | null
  }

  export type Sisha_masterMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: string | null
    categoryid: string | null
  }

  export type Sisha_masterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: string | null
    categoryid: string | null
  }

  export type Sisha_masterCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    categoryid: number
    _all: number
  }


  export type Sisha_masterMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
  }

  export type Sisha_masterMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
  }

  export type Sisha_masterCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryid?: true
    _all?: true
  }

  export type Sisha_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sisha_master to aggregate.
     */
    where?: Sisha_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sisha_masters to fetch.
     */
    orderBy?: Sisha_masterOrderByWithRelationInput | Sisha_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sisha_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sisha_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sisha_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sisha_masters
    **/
    _count?: true | Sisha_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sisha_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sisha_masterMaxAggregateInputType
  }

  export type GetSisha_masterAggregateType<T extends Sisha_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateSisha_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSisha_master[P]>
      : GetScalarType<T[P], AggregateSisha_master[P]>
  }




  export type Sisha_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sisha_masterWhereInput
    orderBy?: Sisha_masterOrderByWithAggregationInput | Sisha_masterOrderByWithAggregationInput[]
    by: Sisha_masterScalarFieldEnum[] | Sisha_masterScalarFieldEnum
    having?: Sisha_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sisha_masterCountAggregateInputType | true
    _min?: Sisha_masterMinAggregateInputType
    _max?: Sisha_masterMaxAggregateInputType
  }

  export type Sisha_masterGroupByOutputType = {
    id: string
    name: string
    description: string
    price: string
    categoryid: string
    _count: Sisha_masterCountAggregateOutputType | null
    _min: Sisha_masterMinAggregateOutputType | null
    _max: Sisha_masterMaxAggregateOutputType | null
  }

  type GetSisha_masterGroupByPayload<T extends Sisha_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sisha_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sisha_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sisha_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Sisha_masterGroupByOutputType[P]>
        }
      >
    >


  export type Sisha_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["sisha_master"]>

  export type Sisha_masterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["sisha_master"]>

  export type Sisha_masterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }, ExtArgs["result"]["sisha_master"]>

  export type Sisha_masterSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryid?: boolean
  }

  export type Sisha_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "categoryid", ExtArgs["result"]["sisha_master"]>

  export type $Sisha_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sisha_master"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: string
      categoryid: string
    }, ExtArgs["result"]["sisha_master"]>
    composites: {}
  }

  type Sisha_masterGetPayload<S extends boolean | null | undefined | Sisha_masterDefaultArgs> = $Result.GetResult<Prisma.$Sisha_masterPayload, S>

  type Sisha_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sisha_masterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sisha_masterCountAggregateInputType | true
    }

  export interface Sisha_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sisha_master'], meta: { name: 'Sisha_master' } }
    /**
     * Find zero or one Sisha_master that matches the filter.
     * @param {Sisha_masterFindUniqueArgs} args - Arguments to find a Sisha_master
     * @example
     * // Get one Sisha_master
     * const sisha_master = await prisma.sisha_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sisha_masterFindUniqueArgs>(args: SelectSubset<T, Sisha_masterFindUniqueArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sisha_master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sisha_masterFindUniqueOrThrowArgs} args - Arguments to find a Sisha_master
     * @example
     * // Get one Sisha_master
     * const sisha_master = await prisma.sisha_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sisha_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, Sisha_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sisha_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sisha_masterFindFirstArgs} args - Arguments to find a Sisha_master
     * @example
     * // Get one Sisha_master
     * const sisha_master = await prisma.sisha_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sisha_masterFindFirstArgs>(args?: SelectSubset<T, Sisha_masterFindFirstArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sisha_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sisha_masterFindFirstOrThrowArgs} args - Arguments to find a Sisha_master
     * @example
     * // Get one Sisha_master
     * const sisha_master = await prisma.sisha_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sisha_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, Sisha_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sisha_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sisha_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sisha_masters
     * const sisha_masters = await prisma.sisha_master.findMany()
     * 
     * // Get first 10 Sisha_masters
     * const sisha_masters = await prisma.sisha_master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sisha_masterWithIdOnly = await prisma.sisha_master.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Sisha_masterFindManyArgs>(args?: SelectSubset<T, Sisha_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sisha_master.
     * @param {Sisha_masterCreateArgs} args - Arguments to create a Sisha_master.
     * @example
     * // Create one Sisha_master
     * const Sisha_master = await prisma.sisha_master.create({
     *   data: {
     *     // ... data to create a Sisha_master
     *   }
     * })
     * 
     */
    create<T extends Sisha_masterCreateArgs>(args: SelectSubset<T, Sisha_masterCreateArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sisha_masters.
     * @param {Sisha_masterCreateManyArgs} args - Arguments to create many Sisha_masters.
     * @example
     * // Create many Sisha_masters
     * const sisha_master = await prisma.sisha_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sisha_masterCreateManyArgs>(args?: SelectSubset<T, Sisha_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sisha_masters and returns the data saved in the database.
     * @param {Sisha_masterCreateManyAndReturnArgs} args - Arguments to create many Sisha_masters.
     * @example
     * // Create many Sisha_masters
     * const sisha_master = await prisma.sisha_master.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sisha_masters and only return the `id`
     * const sisha_masterWithIdOnly = await prisma.sisha_master.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Sisha_masterCreateManyAndReturnArgs>(args?: SelectSubset<T, Sisha_masterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sisha_master.
     * @param {Sisha_masterDeleteArgs} args - Arguments to delete one Sisha_master.
     * @example
     * // Delete one Sisha_master
     * const Sisha_master = await prisma.sisha_master.delete({
     *   where: {
     *     // ... filter to delete one Sisha_master
     *   }
     * })
     * 
     */
    delete<T extends Sisha_masterDeleteArgs>(args: SelectSubset<T, Sisha_masterDeleteArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sisha_master.
     * @param {Sisha_masterUpdateArgs} args - Arguments to update one Sisha_master.
     * @example
     * // Update one Sisha_master
     * const sisha_master = await prisma.sisha_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sisha_masterUpdateArgs>(args: SelectSubset<T, Sisha_masterUpdateArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sisha_masters.
     * @param {Sisha_masterDeleteManyArgs} args - Arguments to filter Sisha_masters to delete.
     * @example
     * // Delete a few Sisha_masters
     * const { count } = await prisma.sisha_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sisha_masterDeleteManyArgs>(args?: SelectSubset<T, Sisha_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sisha_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sisha_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sisha_masters
     * const sisha_master = await prisma.sisha_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sisha_masterUpdateManyArgs>(args: SelectSubset<T, Sisha_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sisha_masters and returns the data updated in the database.
     * @param {Sisha_masterUpdateManyAndReturnArgs} args - Arguments to update many Sisha_masters.
     * @example
     * // Update many Sisha_masters
     * const sisha_master = await prisma.sisha_master.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sisha_masters and only return the `id`
     * const sisha_masterWithIdOnly = await prisma.sisha_master.updateManyAndReturn({
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
    updateManyAndReturn<T extends Sisha_masterUpdateManyAndReturnArgs>(args: SelectSubset<T, Sisha_masterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sisha_master.
     * @param {Sisha_masterUpsertArgs} args - Arguments to update or create a Sisha_master.
     * @example
     * // Update or create a Sisha_master
     * const sisha_master = await prisma.sisha_master.upsert({
     *   create: {
     *     // ... data to create a Sisha_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sisha_master we want to update
     *   }
     * })
     */
    upsert<T extends Sisha_masterUpsertArgs>(args: SelectSubset<T, Sisha_masterUpsertArgs<ExtArgs>>): Prisma__Sisha_masterClient<$Result.GetResult<Prisma.$Sisha_masterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sisha_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sisha_masterCountArgs} args - Arguments to filter Sisha_masters to count.
     * @example
     * // Count the number of Sisha_masters
     * const count = await prisma.sisha_master.count({
     *   where: {
     *     // ... the filter for the Sisha_masters we want to count
     *   }
     * })
    **/
    count<T extends Sisha_masterCountArgs>(
      args?: Subset<T, Sisha_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sisha_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sisha_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sisha_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sisha_masterAggregateArgs>(args: Subset<T, Sisha_masterAggregateArgs>): Prisma.PrismaPromise<GetSisha_masterAggregateType<T>>

    /**
     * Group by Sisha_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sisha_masterGroupByArgs} args - Group by arguments.
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
      T extends Sisha_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sisha_masterGroupByArgs['orderBy'] }
        : { orderBy?: Sisha_masterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Sisha_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSisha_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sisha_master model
   */
  readonly fields: Sisha_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sisha_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sisha_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Sisha_master model
   */
  interface Sisha_masterFieldRefs {
    readonly id: FieldRef<"Sisha_master", 'String'>
    readonly name: FieldRef<"Sisha_master", 'String'>
    readonly description: FieldRef<"Sisha_master", 'String'>
    readonly price: FieldRef<"Sisha_master", 'String'>
    readonly categoryid: FieldRef<"Sisha_master", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sisha_master findUnique
   */
  export type Sisha_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * Filter, which Sisha_master to fetch.
     */
    where: Sisha_masterWhereUniqueInput
  }

  /**
   * Sisha_master findUniqueOrThrow
   */
  export type Sisha_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * Filter, which Sisha_master to fetch.
     */
    where: Sisha_masterWhereUniqueInput
  }

  /**
   * Sisha_master findFirst
   */
  export type Sisha_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * Filter, which Sisha_master to fetch.
     */
    where?: Sisha_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sisha_masters to fetch.
     */
    orderBy?: Sisha_masterOrderByWithRelationInput | Sisha_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sisha_masters.
     */
    cursor?: Sisha_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sisha_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sisha_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sisha_masters.
     */
    distinct?: Sisha_masterScalarFieldEnum | Sisha_masterScalarFieldEnum[]
  }

  /**
   * Sisha_master findFirstOrThrow
   */
  export type Sisha_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * Filter, which Sisha_master to fetch.
     */
    where?: Sisha_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sisha_masters to fetch.
     */
    orderBy?: Sisha_masterOrderByWithRelationInput | Sisha_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sisha_masters.
     */
    cursor?: Sisha_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sisha_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sisha_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sisha_masters.
     */
    distinct?: Sisha_masterScalarFieldEnum | Sisha_masterScalarFieldEnum[]
  }

  /**
   * Sisha_master findMany
   */
  export type Sisha_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * Filter, which Sisha_masters to fetch.
     */
    where?: Sisha_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sisha_masters to fetch.
     */
    orderBy?: Sisha_masterOrderByWithRelationInput | Sisha_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sisha_masters.
     */
    cursor?: Sisha_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sisha_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sisha_masters.
     */
    skip?: number
    distinct?: Sisha_masterScalarFieldEnum | Sisha_masterScalarFieldEnum[]
  }

  /**
   * Sisha_master create
   */
  export type Sisha_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * The data needed to create a Sisha_master.
     */
    data: XOR<Sisha_masterCreateInput, Sisha_masterUncheckedCreateInput>
  }

  /**
   * Sisha_master createMany
   */
  export type Sisha_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sisha_masters.
     */
    data: Sisha_masterCreateManyInput | Sisha_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sisha_master createManyAndReturn
   */
  export type Sisha_masterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * The data used to create many Sisha_masters.
     */
    data: Sisha_masterCreateManyInput | Sisha_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sisha_master update
   */
  export type Sisha_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * The data needed to update a Sisha_master.
     */
    data: XOR<Sisha_masterUpdateInput, Sisha_masterUncheckedUpdateInput>
    /**
     * Choose, which Sisha_master to update.
     */
    where: Sisha_masterWhereUniqueInput
  }

  /**
   * Sisha_master updateMany
   */
  export type Sisha_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sisha_masters.
     */
    data: XOR<Sisha_masterUpdateManyMutationInput, Sisha_masterUncheckedUpdateManyInput>
    /**
     * Filter which Sisha_masters to update
     */
    where?: Sisha_masterWhereInput
    /**
     * Limit how many Sisha_masters to update.
     */
    limit?: number
  }

  /**
   * Sisha_master updateManyAndReturn
   */
  export type Sisha_masterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * The data used to update Sisha_masters.
     */
    data: XOR<Sisha_masterUpdateManyMutationInput, Sisha_masterUncheckedUpdateManyInput>
    /**
     * Filter which Sisha_masters to update
     */
    where?: Sisha_masterWhereInput
    /**
     * Limit how many Sisha_masters to update.
     */
    limit?: number
  }

  /**
   * Sisha_master upsert
   */
  export type Sisha_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * The filter to search for the Sisha_master to update in case it exists.
     */
    where: Sisha_masterWhereUniqueInput
    /**
     * In case the Sisha_master found by the `where` argument doesn't exist, create a new Sisha_master with this data.
     */
    create: XOR<Sisha_masterCreateInput, Sisha_masterUncheckedCreateInput>
    /**
     * In case the Sisha_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sisha_masterUpdateInput, Sisha_masterUncheckedUpdateInput>
  }

  /**
   * Sisha_master delete
   */
  export type Sisha_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
    /**
     * Filter which Sisha_master to delete.
     */
    where: Sisha_masterWhereUniqueInput
  }

  /**
   * Sisha_master deleteMany
   */
  export type Sisha_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sisha_masters to delete
     */
    where?: Sisha_masterWhereInput
    /**
     * Limit how many Sisha_masters to delete.
     */
    limit?: number
  }

  /**
   * Sisha_master without action
   */
  export type Sisha_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sisha_master
     */
    select?: Sisha_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sisha_master
     */
    omit?: Sisha_masterOmit<ExtArgs> | null
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


  export const Wine_masterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    categoryid: 'categoryid'
  };

  export type Wine_masterScalarFieldEnum = (typeof Wine_masterScalarFieldEnum)[keyof typeof Wine_masterScalarFieldEnum]


  export const Food_masterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    categoryid: 'categoryid'
  };

  export type Food_masterScalarFieldEnum = (typeof Food_masterScalarFieldEnum)[keyof typeof Food_masterScalarFieldEnum]


  export const Sisha_masterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    categoryid: 'categoryid'
  };

  export type Sisha_masterScalarFieldEnum = (typeof Sisha_masterScalarFieldEnum)[keyof typeof Sisha_masterScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type Wine_masterWhereInput = {
    AND?: Wine_masterWhereInput | Wine_masterWhereInput[]
    OR?: Wine_masterWhereInput[]
    NOT?: Wine_masterWhereInput | Wine_masterWhereInput[]
    id?: StringFilter<"Wine_master"> | string
    name?: StringFilter<"Wine_master"> | string
    description?: StringFilter<"Wine_master"> | string
    price?: StringFilter<"Wine_master"> | string
    categoryid?: StringFilter<"Wine_master"> | string
  }

  export type Wine_masterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Wine_masterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Wine_masterWhereInput | Wine_masterWhereInput[]
    OR?: Wine_masterWhereInput[]
    NOT?: Wine_masterWhereInput | Wine_masterWhereInput[]
    name?: StringFilter<"Wine_master"> | string
    description?: StringFilter<"Wine_master"> | string
    price?: StringFilter<"Wine_master"> | string
    categoryid?: StringFilter<"Wine_master"> | string
  }, "id">

  export type Wine_masterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
    _count?: Wine_masterCountOrderByAggregateInput
    _max?: Wine_masterMaxOrderByAggregateInput
    _min?: Wine_masterMinOrderByAggregateInput
  }

  export type Wine_masterScalarWhereWithAggregatesInput = {
    AND?: Wine_masterScalarWhereWithAggregatesInput | Wine_masterScalarWhereWithAggregatesInput[]
    OR?: Wine_masterScalarWhereWithAggregatesInput[]
    NOT?: Wine_masterScalarWhereWithAggregatesInput | Wine_masterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wine_master"> | string
    name?: StringWithAggregatesFilter<"Wine_master"> | string
    description?: StringWithAggregatesFilter<"Wine_master"> | string
    price?: StringWithAggregatesFilter<"Wine_master"> | string
    categoryid?: StringWithAggregatesFilter<"Wine_master"> | string
  }

  export type Food_masterWhereInput = {
    AND?: Food_masterWhereInput | Food_masterWhereInput[]
    OR?: Food_masterWhereInput[]
    NOT?: Food_masterWhereInput | Food_masterWhereInput[]
    id?: StringFilter<"Food_master"> | string
    name?: StringFilter<"Food_master"> | string
    description?: StringFilter<"Food_master"> | string
    price?: StringFilter<"Food_master"> | string
    categoryid?: StringFilter<"Food_master"> | string
  }

  export type Food_masterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Food_masterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Food_masterWhereInput | Food_masterWhereInput[]
    OR?: Food_masterWhereInput[]
    NOT?: Food_masterWhereInput | Food_masterWhereInput[]
    name?: StringFilter<"Food_master"> | string
    description?: StringFilter<"Food_master"> | string
    price?: StringFilter<"Food_master"> | string
    categoryid?: StringFilter<"Food_master"> | string
  }, "id">

  export type Food_masterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
    _count?: Food_masterCountOrderByAggregateInput
    _max?: Food_masterMaxOrderByAggregateInput
    _min?: Food_masterMinOrderByAggregateInput
  }

  export type Food_masterScalarWhereWithAggregatesInput = {
    AND?: Food_masterScalarWhereWithAggregatesInput | Food_masterScalarWhereWithAggregatesInput[]
    OR?: Food_masterScalarWhereWithAggregatesInput[]
    NOT?: Food_masterScalarWhereWithAggregatesInput | Food_masterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Food_master"> | string
    name?: StringWithAggregatesFilter<"Food_master"> | string
    description?: StringWithAggregatesFilter<"Food_master"> | string
    price?: StringWithAggregatesFilter<"Food_master"> | string
    categoryid?: StringWithAggregatesFilter<"Food_master"> | string
  }

  export type Sisha_masterWhereInput = {
    AND?: Sisha_masterWhereInput | Sisha_masterWhereInput[]
    OR?: Sisha_masterWhereInput[]
    NOT?: Sisha_masterWhereInput | Sisha_masterWhereInput[]
    id?: StringFilter<"Sisha_master"> | string
    name?: StringFilter<"Sisha_master"> | string
    description?: StringFilter<"Sisha_master"> | string
    price?: StringFilter<"Sisha_master"> | string
    categoryid?: StringFilter<"Sisha_master"> | string
  }

  export type Sisha_masterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Sisha_masterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Sisha_masterWhereInput | Sisha_masterWhereInput[]
    OR?: Sisha_masterWhereInput[]
    NOT?: Sisha_masterWhereInput | Sisha_masterWhereInput[]
    name?: StringFilter<"Sisha_master"> | string
    description?: StringFilter<"Sisha_master"> | string
    price?: StringFilter<"Sisha_master"> | string
    categoryid?: StringFilter<"Sisha_master"> | string
  }, "id">

  export type Sisha_masterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
    _count?: Sisha_masterCountOrderByAggregateInput
    _max?: Sisha_masterMaxOrderByAggregateInput
    _min?: Sisha_masterMinOrderByAggregateInput
  }

  export type Sisha_masterScalarWhereWithAggregatesInput = {
    AND?: Sisha_masterScalarWhereWithAggregatesInput | Sisha_masterScalarWhereWithAggregatesInput[]
    OR?: Sisha_masterScalarWhereWithAggregatesInput[]
    NOT?: Sisha_masterScalarWhereWithAggregatesInput | Sisha_masterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sisha_master"> | string
    name?: StringWithAggregatesFilter<"Sisha_master"> | string
    description?: StringWithAggregatesFilter<"Sisha_master"> | string
    price?: StringWithAggregatesFilter<"Sisha_master"> | string
    categoryid?: StringWithAggregatesFilter<"Sisha_master"> | string
  }

  export type Wine_masterCreateInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Wine_masterUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Wine_masterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Wine_masterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Wine_masterCreateManyInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Wine_masterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Wine_masterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Food_masterCreateInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Food_masterUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Food_masterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Food_masterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Food_masterCreateManyInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Food_masterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Food_masterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Sisha_masterCreateInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Sisha_masterUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Sisha_masterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Sisha_masterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Sisha_masterCreateManyInput = {
    id?: string
    name: string
    description: string
    price: string
    categoryid: string
  }

  export type Sisha_masterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
  }

  export type Sisha_masterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    categoryid?: StringFieldUpdateOperationsInput | string
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

  export type Wine_masterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Wine_masterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Wine_masterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
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

  export type Food_masterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Food_masterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Food_masterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Sisha_masterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Sisha_masterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type Sisha_masterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryid?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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