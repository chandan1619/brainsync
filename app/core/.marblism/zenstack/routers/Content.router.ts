/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ContentInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.createMany(input as any))),

        create: procedure.input($Schema.ContentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.create(input as any))),

        deleteMany: procedure.input($Schema.ContentInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.deleteMany(input as any))),

        delete: procedure.input($Schema.ContentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.delete(input as any))),

        findFirst: procedure.input($Schema.ContentInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).content.findFirst(input as any))),

        findMany: procedure.input($Schema.ContentInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).content.findMany(input as any))),

        findUnique: procedure.input($Schema.ContentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).content.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.updateMany(input as any))),

        update: procedure.input($Schema.ContentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.update(input as any))),

        count: procedure.input($Schema.ContentInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).content.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentGetPayload<T>, Context>) => Promise<Prisma.ContentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentGetPayload<T>, Context>) => Promise<Prisma.ContentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContentFindFirstArgs, TData = Prisma.ContentGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ContentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContentFindManyArgs, TData = Array<Prisma.ContentGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContentFindUniqueArgs, TData = Prisma.ContentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentGetPayload<T>, Context>) => Promise<Prisma.ContentGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ContentCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ContentCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ContentCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ContentCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
