export type LoginProps = {
	email: string;
	password: string;
};

type RegisterProps = {
	firstName: string;
	lastName: string;
	email: string;
	birthdate: string;
	gender: string;
	password: string;
	confirmPassword: string;
};

export type UserInfoProps = {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	birthdate: string;
	gender: string;
};
