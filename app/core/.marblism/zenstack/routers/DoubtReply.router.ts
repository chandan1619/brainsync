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

        createMany: procedure.input($Schema.DoubtReplyInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubtReply.createMany(input as any))),

        create: procedure.input($Schema.DoubtReplyInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubtReply.create(input as any))),

        deleteMany: procedure.input($Schema.DoubtReplyInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubtReply.deleteMany(input as any))),

        delete: procedure.input($Schema.DoubtReplyInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubtReply.delete(input as any))),

        findFirst: procedure.input($Schema.DoubtReplyInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).doubtReply.findFirst(input as any))),

        findMany: procedure.input($Schema.DoubtReplyInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).doubtReply.findMany(input as any))),

        findUnique: procedure.input($Schema.DoubtReplyInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).doubtReply.findUnique(input as any))),

        updateMany: procedure.input($Schema.DoubtReplyInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubtReply.updateMany(input as any))),

        update: procedure.input($Schema.DoubtReplyInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).doubtReply.update(input as any))),

        count: procedure.input($Schema.DoubtReplyInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).doubtReply.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DoubtReplyCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtReplyCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtReplyCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtReplyCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DoubtReplyCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtReplyCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DoubtReplyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DoubtReplyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtReplyCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtReplyCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DoubtReplyGetPayload<T>, Context>) => Promise<Prisma.DoubtReplyGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DoubtReplyDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtReplyDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtReplyDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtReplyDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DoubtReplyDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtReplyDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DoubtReplyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DoubtReplyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtReplyDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtReplyDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DoubtReplyGetPayload<T>, Context>) => Promise<Prisma.DoubtReplyGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DoubtReplyFindFirstArgs, TData = Prisma.DoubtReplyGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.DoubtReplyFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DoubtReplyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DoubtReplyFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DoubtReplyFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DoubtReplyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DoubtReplyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DoubtReplyFindManyArgs, TData = Array<Prisma.DoubtReplyGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.DoubtReplyFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DoubtReplyGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DoubtReplyFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DoubtReplyFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DoubtReplyGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DoubtReplyGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DoubtReplyFindUniqueArgs, TData = Prisma.DoubtReplyGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DoubtReplyFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DoubtReplyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DoubtReplyFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DoubtReplyFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DoubtReplyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DoubtReplyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DoubtReplyUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtReplyUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtReplyUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtReplyUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DoubtReplyUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DoubtReplyUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DoubtReplyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DoubtReplyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DoubtReplyUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DoubtReplyUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DoubtReplyGetPayload<T>, Context>) => Promise<Prisma.DoubtReplyGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.DoubtReplyCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DoubtReplyCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.DoubtReplyCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.DoubtReplyCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.DoubtReplyCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.DoubtReplyCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.DoubtReplyCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DoubtReplyCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
