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

        createMany: procedure.input($Schema.AiConversationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiConversation.createMany(input as any))),

        create: procedure.input($Schema.AiConversationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiConversation.create(input as any))),

        deleteMany: procedure.input($Schema.AiConversationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiConversation.deleteMany(input as any))),

        delete: procedure.input($Schema.AiConversationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiConversation.delete(input as any))),

        findFirst: procedure.input($Schema.AiConversationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).aiConversation.findFirst(input as any))),

        findMany: procedure.input($Schema.AiConversationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).aiConversation.findMany(input as any))),

        findUnique: procedure.input($Schema.AiConversationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).aiConversation.findUnique(input as any))),

        updateMany: procedure.input($Schema.AiConversationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiConversation.updateMany(input as any))),

        update: procedure.input($Schema.AiConversationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiConversation.update(input as any))),

        count: procedure.input($Schema.AiConversationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).aiConversation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AiConversationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiConversationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiConversationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiConversationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AiConversationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiConversationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiConversationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiConversationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiConversationGetPayload<T>, Context>) => Promise<Prisma.AiConversationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AiConversationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiConversationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiConversationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiConversationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AiConversationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiConversationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiConversationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiConversationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiConversationGetPayload<T>, Context>) => Promise<Prisma.AiConversationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AiConversationFindFirstArgs, TData = Prisma.AiConversationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AiConversationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiConversationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AiConversationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AiConversationFindManyArgs, TData = Array<Prisma.AiConversationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AiConversationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AiConversationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiConversationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AiConversationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AiConversationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AiConversationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AiConversationFindUniqueArgs, TData = Prisma.AiConversationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiConversationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiConversationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiConversationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AiConversationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiConversationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiConversationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiConversationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AiConversationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiConversationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiConversationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiConversationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiConversationGetPayload<T>, Context>) => Promise<Prisma.AiConversationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AiConversationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AiConversationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AiConversationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AiConversationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AiConversationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AiConversationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AiConversationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AiConversationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
