import React, { useState } from "react";
import Layout from "../../Layouts/Default";
import { Inertia } from "@inertiajs/inertia";

const CreatePost = ({ errors }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        Inertia.post("/posts", {
            title,
            content,
        });
    };

    return (
        <Layout>
            <div className="row" style={{ marginTop: "100px" }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <div className="font-weight-bold">TAMBAH POST</div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Content
                                    </label>
                                    <textarea
                                        name="content"
                                        id="content"
                                        className="form-control"
                                        rows="10"
                                        onChange={(e) =>
                                            setContent(e.target.value)
                                        }
                                    />
                                </div>
                                {errors.content && (
                                    <div className="alert alert-danger">
                                        {errors.content}
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-md btn-success me-2"
                                    >
                                        <i className="fa fa-save"></i> SAVE
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-md btn-warning"
                                    >
                                        <i className="fa fa-save"></i> RESET
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreatePost;
