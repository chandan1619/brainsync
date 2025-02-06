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

        createMany: procedure.input($Schema.TestAttemptInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testAttempt.createMany(input as any))),

        create: procedure.input($Schema.TestAttemptInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testAttempt.create(input as any))),

        deleteMany: procedure.input($Schema.TestAttemptInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testAttempt.deleteMany(input as any))),

        delete: procedure.input($Schema.TestAttemptInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testAttempt.delete(input as any))),

        findFirst: procedure.input($Schema.TestAttemptInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).testAttempt.findFirst(input as any))),

        findMany: procedure.input($Schema.TestAttemptInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).testAttempt.findMany(input as any))),

        findUnique: procedure.input($Schema.TestAttemptInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).testAttempt.findUnique(input as any))),

        updateMany: procedure.input($Schema.TestAttemptInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testAttempt.updateMany(input as any))),

        update: procedure.input($Schema.TestAttemptInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testAttempt.update(input as any))),

        count: procedure.input($Schema.TestAttemptInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).testAttempt.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TestAttemptCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestAttemptCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestAttemptCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestAttemptCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TestAttemptCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestAttemptCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestAttemptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestAttemptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestAttemptCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestAttemptCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestAttemptGetPayload<T>, Context>) => Promise<Prisma.TestAttemptGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TestAttemptDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestAttemptDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestAttemptDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestAttemptDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TestAttemptDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestAttemptDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestAttemptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestAttemptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestAttemptDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestAttemptDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestAttemptGetPayload<T>, Context>) => Promise<Prisma.TestAttemptGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TestAttemptFindFirstArgs, TData = Prisma.TestAttemptGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.TestAttemptFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestAttemptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestAttemptFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TestAttemptFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestAttemptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TestAttemptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TestAttemptFindManyArgs, TData = Array<Prisma.TestAttemptGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.TestAttemptFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TestAttemptGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestAttemptFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TestAttemptFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TestAttemptGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TestAttemptGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TestAttemptFindUniqueArgs, TData = Prisma.TestAttemptGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TestAttemptFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestAttemptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestAttemptFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestAttemptFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestAttemptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TestAttemptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TestAttemptUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestAttemptUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestAttemptUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestAttemptUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TestAttemptUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestAttemptUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestAttemptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestAttemptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestAttemptUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestAttemptUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestAttemptGetPayload<T>, Context>) => Promise<Prisma.TestAttemptGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TestAttemptCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TestAttemptCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.TestAttemptCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TestAttemptCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TestAttemptCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.TestAttemptCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TestAttemptCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TestAttemptCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
