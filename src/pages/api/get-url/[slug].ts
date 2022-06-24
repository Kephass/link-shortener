import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db/client';

type ResponseData = {
	message: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) => {
	const slug = req.query['slug'];

	if (!slug || typeof slug !== 'string') {
		res.statusCode = 404;

		res.send({ message: 'use with a slug' });

		return;
	}

	const data = await prisma.shortLink.findFirst({
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	if (!data?.url) {
		res.statusCode = 404;

		res.send({ message: 'slug not found' });

		return;
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Cache-Control', 's-maxage=1000000000, stale-while-revalidate');

	return res.redirect(data.url);
};
