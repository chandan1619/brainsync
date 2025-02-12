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

        createMany: procedure.input($Schema.AIConversationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aIConversation.createMany(input as any))),

        create: procedure.input($Schema.AIConversationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aIConversation.create(input as any))),

        deleteMany: procedure.input($Schema.AIConversationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aIConversation.deleteMany(input as any))),

        delete: procedure.input($Schema.AIConversationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aIConversation.delete(input as any))),

        findFirst: procedure.input($Schema.AIConversationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).aIConversation.findFirst(input as any))),

        findMany: procedure.input($Schema.AIConversationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).aIConversation.findMany(input as any))),

        findUnique: procedure.input($Schema.AIConversationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).aIConversation.findUnique(input as any))),

        updateMany: procedure.input($Schema.AIConversationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aIConversation.updateMany(input as any))),

        update: procedure.input($Schema.AIConversationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aIConversation.update(input as any))),

        count: procedure.input($Schema.AIConversationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).aIConversation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AIConversationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AIConversationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AIConversationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AIConversationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AIConversationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AIConversationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AIConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AIConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AIConversationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AIConversationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AIConversationGetPayload<T>, Context>) => Promise<Prisma.AIConversationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AIConversationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AIConversationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AIConversationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AIConversationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AIConversationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AIConversationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AIConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AIConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AIConversationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AIConversationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AIConversationGetPayload<T>, Context>) => Promise<Prisma.AIConversationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AIConversationFindFirstArgs, TData = Prisma.AIConversationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AIConversationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AIConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AIConversationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AIConversationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AIConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AIConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AIConversationFindManyArgs, TData = Array<Prisma.AIConversationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AIConversationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AIConversationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AIConversationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AIConversationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AIConversationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AIConversationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AIConversationFindUniqueArgs, TData = Prisma.AIConversationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AIConversationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AIConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AIConversationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AIConversationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AIConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AIConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AIConversationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AIConversationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AIConversationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AIConversationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AIConversationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AIConversationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AIConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AIConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AIConversationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AIConversationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AIConversationGetPayload<T>, Context>) => Promise<Prisma.AIConversationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AIConversationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AIConversationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AIConversationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AIConversationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AIConversationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AIConversationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AIConversationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AIConversationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
