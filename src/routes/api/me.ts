import { FastifyPluginAsync } from 'fastify';
import { generateSunflake } from 'sunflake';

import { DB } from '../../database';
import { useAuth } from '../../util/http/useAuth';

export const generateSnowflake = generateSunflake();

export const MeRoute: FastifyPluginAsync = async (router, _options) => {
    router.get('/', async (_request, reply) => {
        const { user_id } = await useAuth(_request, reply);

        const data = await DB.selectOneFrom('owners', ['admin'], {
            user_id,
        });

        reply.send({
            admin: data?.admin ? data.admin : false,
        });
    });
};
