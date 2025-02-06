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

        createMany: procedure.input($Schema.DoubtInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubt.createMany(input as any))),

        create: procedure.input($Schema.DoubtInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubt.create(input as any))),

        deleteMany: procedure.input($Schema.DoubtInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubt.deleteMany(input as any))),

        delete: procedure.input($Schema.DoubtInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubt.delete(input as any))),

        findFirst: procedure.input($Schema.DoubtInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).doubt.findFirst(input as any))),

        findMany: procedure.input($Schema.DoubtInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).doubt.findMany(input as any))),

        findUnique: procedure.input($Schema.DoubtInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).doubt.findUnique(input as any))),

        updateMany: procedure.input($Schema.DoubtInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubt.updateMany(input as any))),

        update: procedure.input($Schema.DoubtInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubt.update(input as any))),

        count: procedure.input($Schema.DoubtInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).doubt.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DoubtCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DoubtCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DoubtGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DoubtGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DoubtGetPayload<T>, Context>) => Promise<Prisma.DoubtGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DoubtDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DoubtDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DoubtGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DoubtGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DoubtGetPayload<T>, Context>) => Promise<Prisma.DoubtGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DoubtFindFirstArgs, TData = Prisma.DoubtGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.DoubtFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DoubtGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DoubtFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DoubtFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DoubtGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DoubtGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DoubtFindManyArgs, TData = Array<Prisma.DoubtGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.DoubtFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DoubtGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DoubtFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DoubtFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DoubtGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DoubtGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DoubtFindUniqueArgs, TData = Prisma.DoubtGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DoubtFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DoubtGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DoubtFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DoubtFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DoubtGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DoubtGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DoubtUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DoubtUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DoubtGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DoubtGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DoubtGetPayload<T>, Context>) => Promise<Prisma.DoubtGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.DoubtCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DoubtCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.DoubtCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.DoubtCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.DoubtCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.DoubtCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.DoubtCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DoubtCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
