class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUserById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async updateUser(id, userData) {
        await this.userRepository.update(id, userData);
        return this.getUserById(id);
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async assignRoleToUser(userId, roleId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (user) {
            user.roleId = roleId;
            await this.userRepository.save(user);
            return user;
        }
        throw new Error('User not found');
    }
}

export default UserService;