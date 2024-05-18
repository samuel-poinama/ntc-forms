import Image from "next/image";

export default function Users() {
    return (
        <div className="user">
            <article>
                <div className="image">
                    <Image src="/users.png" alt="users" width={200} height={150} />
                </div>

                <div className="title">
                    <div className="top">
                        <h1>John Doe</h1>

                        <div className="button">
                            <button type="submit">
                            <Image src="/save.png" alt="users" width={30} height={30} />
                            </button>
                            <button type="submit">
                            <Image src="/cross.png" alt="users" width={30} height={30} />
                            </button>
                        </div>
                    </div>

                    <div className="info">
                        <div className="mail">
                            <h3>Mail : test@gmail.com</h3>
                            <form action="">
                                <select name="userType" className="form-control selectpicker">
                                    <option value="">Select role</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </form>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eaque, iusto earum ab illum, hic, ullam beatae itaque iure obcaecati amet accusamus fuga voluptatum placeat aspernatur. Quaerat saepe est iste?</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
